import { Injectable } from '@angular/core';
import { environment } from '@biosimulations/shared/environments';
import { Observable, shareReplay } from 'rxjs';
import {
  SimulationRun,
  SimulationRunMetadata,
  SimulationRunResults,
  SimulationRunOutput,
} from '@biosimulations/datamodel/api';
import {
  SimulationRunSummary,
  CombineArchiveLog,
  File as IFile,
  SimulationRunSedDocument,
} from '@biosimulations/datamodel/common';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '@biosimulations/config/common';

@Injectable({
  providedIn: 'root',
})
export class SimulationRunService {
  private endpoints: Endpoints;

  private cachedRunId?: string;
  private cachedRunObservables: { [endpoint: string]: Observable<any> } = {};

  constructor(private httpClient: HttpClient) {
    this.endpoints = new Endpoints(environment.env);
  }

  public getSimulationRun(id: string): Observable<SimulationRun> {
    const endpoint = this.endpoints.getSimulationRunEndpoint(id);
    return this.getData<SimulationRun>(id, endpoint);
  }

  public getSimulationRunFiles(id: string): Observable<IFile[]> {
    const endpoint = this.endpoints.getSimulationRunFilesEndpoint(id);
    return this.getData<IFile[]>(id, endpoint);
  }

  public getSimulationRunFileContent(id: string, file: string) {
    const endpoint = this.endpoints.getSimulationRunFileContentEndpoint(
      id,
      file,
    );
    return this.getData<any>(id, endpoint);
  }

  public getSimulationRunSimulationSpecifications(
    id: string,
  ): Observable<SimulationRunSedDocument[]> {
    const endpoint = this.endpoints.getSpecificationsEndpoint(id);
    return this.getData<SimulationRunSedDocument[]>(id, endpoint);
  }

  public getSimulationRunMetadata(
    id: string,
  ): Observable<SimulationRunMetadata> {
    const endpoint = this.endpoints.getSimulationRunMetadataEndpoint(id);
    return this.getData<SimulationRunMetadata>(id, endpoint);
  }

  public getSimulationRunResults(
    id: string,
    includeData = false,
  ): Observable<SimulationRunResults> {
    const endpoint = this.endpoints.getRunResultsEndpoint(
      id,
      undefined,
      includeData,
    );
    return this.getData<SimulationRunResults>(id, endpoint);
  }

  public getSimulationRunOutputResults(
    id: string,
    outputId: string,
    includeData = false,
  ): Observable<SimulationRunOutput> {
    const endpoint = this.endpoints.getRunResultsEndpoint(
      id,
      outputId,
      includeData,
    );
    return this.getData<SimulationRunOutput>(id, endpoint);
  }

  public getSimulationRunLog(id: string): Observable<CombineArchiveLog> {
    const endpoint = this.endpoints.getSimulationRunLogsEndpoint(id);
    return this.getData<CombineArchiveLog>(id, endpoint);
  }

  public getSimulationRunSummary(id: string): Observable<SimulationRunSummary> {
    const endpoint = this.endpoints.getSimulationRunSummariesEndpoint(id);
    return this.getData<SimulationRunSummary>(id, endpoint);
  }

  private getData<T>(runId: string, endpoint: string): Observable<T> {
    if (runId !== this.cachedRunId) {
      this.cachedRunId = runId;
      this.cachedRunObservables = {};
    }

    let observable = this.cachedRunObservables[endpoint];
    if (!observable) {
      observable = this.httpClient.get<any>(endpoint).pipe(shareReplay(1));
      this.cachedRunObservables[endpoint] = observable;
    }

    return observable as Observable<T>;
  }
}
