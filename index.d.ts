import { IUniverConfigOptions } from './services/univer/config';
import { IDocumentConfigOptions } from './services/documents/config';

type ServicesConfigsType = {
  UniverConfigOptions: IUniverConfigOptions;
  DocumentConfigOptions: IDocumentConfigOptions;
};

export const ServicesConfigs: ServicesConfigsType;
