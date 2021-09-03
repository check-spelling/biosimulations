import {
  BioSimulationsCombineArchiveElementMetadata,
  BioSimulationsCustomMetadata,
  BioSimulationsMetadataValue,
  COMBINEService,
} from '@biosimulations/combine-api-client';
import {
  extractMetadataJob,
  JobQueue,
} from '@biosimulations/messages/messages';
import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import {
  ArchiveMetadata,
  LabeledIdentifier,
  SimulationRunMetadataInput,
} from '@biosimulations/datamodel/api';
import { AxiosError, AxiosResponse } from 'axios';
import { Endpoints } from '@biosimulations/config/common';
import { ConfigService } from '@nestjs/config';

@Processor(JobQueue.metadata)
export class MetadataProcessor {
  private readonly logger = new Logger(MetadataProcessor.name);
  public constructor(
    private service: COMBINEService,
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  @Process()
  private async extractMetadata(job: Job<extractMetadataJob>): Promise<void> {
    const id = job.data.simId;

    const metadataURL = new Endpoints().getMetadataEndpoint();

    const url = new Endpoints().getRunDownloadEndpoint(id, true);

    const res = await firstValueFrom(
      this.service.srcHandlersCombineGetMetadataForCombineArchiveHandlerBiosimulations(
        undefined,
        url,
      ),
    );

    // TODO handle errors/timeouts

    const combineMetadata: BioSimulationsCombineArchiveElementMetadata[] =
      res.data;

    this.logger.log(`Extracted metadata for ${id}`);
    //this.logger.error(JSON.stringify(combineMetadata))
    job.progress(50);

    const metadata: ArchiveMetadata[] = combineMetadata.map(
      this.convertMetadata,
      this,
    );
    this.logger.log(`Converted metadata for ${id}`);
    const postMetadata: SimulationRunMetadataInput = {
      id: id,
      metadata,
    };  
    const metadtaPostObserver = 
    {next:   (res:AxiosResponse<any>) => {
        if (res.status === 201) {
          this.logger.log(`Posted metadata for ${id}`);
        }
        job.progress(100);
      },
      error: (err: AxiosError) => {
        this.logger.error(`Failed to post metadata for ${id}`);
        this.logger.error(err?.response?.data);
      }

    }  
    const postedMetadata = this.httpService
      .post(metadataURL, postMetadata)
      .subscribe(metadtaPostObserver);
  }

  private convertMetadataValue(
    data: BioSimulationsMetadataValue,
  ): LabeledIdentifier {
    if (data) {
      return {
        label: data.label || '',
        uri: data.uri,
      };
    }
    return { label: '', uri: '' };
  }

  private convertMetadata(
    combineMetadata: BioSimulationsCombineArchiveElementMetadata,
  ): ArchiveMetadata {
    const metadata: ArchiveMetadata = {
      uri: combineMetadata.uri,
      title: combineMetadata.title,
      abstract: combineMetadata.abstract,
      keywords:
        combineMetadata.keywords?.map((keyword) => {
          return { label: keyword, uri: null };
        }) || [],
      thumbnails: combineMetadata.thumbnails || [],
      description: combineMetadata.description,
      taxa: combineMetadata.taxa?.map(this.convertMetadataValue, this) || [],
      encodes:
        combineMetadata.encodes?.map(this.convertMetadataValue, this) || [],
      sources:
        combineMetadata.sources?.map(this.convertMetadataValue, this) || [],
      predecessors:
        combineMetadata.predecessors?.map(this.convertMetadataValue, this) ||
        [],
      successors:
        combineMetadata.successors?.map(this.convertMetadataValue, this) || [],
      seeAlso:
        combineMetadata.seeAlso?.map(this.convertMetadataValue, this) || [],
      identifiers:
        combineMetadata.identifiers?.map(this.convertMetadataValue, this) || [],
      citations:
        combineMetadata.citations?.map(this.convertMetadataValue, this) || [],
      creators:
        combineMetadata.creators?.map(this.convertMetadataValue, this) || [],
      funders:
        combineMetadata.funders?.map(this.convertMetadataValue, this) || [],
      contributors:
        combineMetadata.contributors?.map(this.convertMetadataValue, this) ||
        [],
      license: this.convertMetadataValue(combineMetadata.license),
      created: combineMetadata.created || '',
      modified: combineMetadata.modified || [],
      other:
        combineMetadata.other?.map((data: BioSimulationsCustomMetadata) => {
          return {
            uri: data.value.uri,
            label: data.value.label || null,
            attribute_label: data.attribute.label,
            attribute_uri: data.attribute.uri,
          };
        }, this) || [],
    };

    return metadata;
  }
}
