import { IAuthMessagePatterns } from './services/shared/message-patterns/auth/index.d';
import { IUniverConfigOptions } from './services/univer/config';
import { IDocumentConfigOptions } from './services/documents/config';

type ServicesConfigsType = {
  UniverOptions: IUniverConfigOptions;
  DocumentOptions: IDocumentConfigOptions;
};

type MessagePatternsType = {
  Auth: IAuthMessagePatterns;
};

export const ServicesConfigs: ServicesConfigsType;
export const MessagePatterns: MessagePatternsType;
