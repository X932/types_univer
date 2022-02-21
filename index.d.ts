import { IAuthMessagePatterns } from './services/univer/message-patterns/auth/index.d';
import { IUniverConfigOptions } from './services/univer/config';
import { IDocumentConfigOptions } from './services/documents/config';

type ServicesConfigsType = {
  UniverOptions: IUniverConfigOptions;
  DocumentOptions: IDocumentConfigOptions;
  AuthMessagePatterns: IAuthMessagePatterns;
};

export const ServicesConfigs: ServicesConfigsType;
