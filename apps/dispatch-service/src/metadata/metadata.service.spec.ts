import { Test, TestingModule } from '@nestjs/testing';

import { MetadataService } from './metadata.service';
import { HttpModule } from '@nestjs/axios';
import { BiosimulationsConfigModule } from '@biosimulations/config/nest';
import {
  CombineWrapperService,
  MockCombineWrapperService,
} from '../combineWrapper.service';

describe('MetadataService', () => {
  let service: MetadataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, BiosimulationsConfigModule],
      providers: [
        { provide: CombineWrapperService, useClass: MockCombineWrapperService },
        MetadataService,
      ],
    }).compile();

    service = module.get<MetadataService>(MetadataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});