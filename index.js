const UniverOptions = require('./services/univer/config');
const DocumentOptions = require('./services/documents/config');
const AuthMessagePatterns = require('./services/univer/message-patterns/auth');
const ServicesConfigs = {
  UniverOptions,
  DocumentOptions,
  AuthMessagePatterns,
};

module.exports = { ServicesConfigs };
