import { IUniverConfigOptions } from './services/univer/config';
import { IDocumentConfigOptions } from './services/documents/config';

type ServicesConfigsType = {
  UniverOptions: IUniverConfigOptions;
  DocumentOptions: IDocumentConfigOptions;
};

export const ServicesConfigs: ServicesConfigsType;
