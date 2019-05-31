const { stripE2ETargets } = require('./utils');

module.exports = function stripE2ETargetsLoader(source, map) {
  this.cacheable();

  const updatedSource = stripE2ETargets(source);

  this.callback(null, updatedSource, map);
};
