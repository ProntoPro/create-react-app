const environments = {
  development: 'development',
  production: 'production',
  stable: 'stable',
  staging: 'staging',
};

const environment = process.env.PP_ENVIRONMENT
  ? environments[process.env.PP_ENVIRONMENT]
  : environments.development;

const serverEnvironment = process.env.PP_SERVER_ENVIRONMENT
  ? environments[process.env.PP_SERVER_ENVIRONMENT]
  : environment;

const stripE2ETargets = source => {
  if (environment === 'production') {
    return source.replace(/data-test=["{]\S+["}]/g, '');
  }

  return source;
};

const setEnvironment = source =>
  source
    .replace('%PP_ENVIRONMENT%', environment)
    .replace('%PP_SERVER_ENVIRONMENT%', serverEnvironment);

module.exports = {
  setEnvironment,
  stripE2ETargets,
};
