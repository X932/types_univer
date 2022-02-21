const UniverOptions = require('./services/univer/config');
const DocumentOptions = require('./services/documents/config');
const Auth = require('./services/shared/message-patterns/auth');

const ServicesConfigs = {
  UniverOptions,
  DocumentOptions,
};

const MessagePatterns = {
  Auth,
};

module.exports = { ServicesConfigs, MessagePatterns };
