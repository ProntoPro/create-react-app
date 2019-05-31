const { setEnvironment } = require('./utils');

function loader(source, map) {
  this.cacheable();

  const updatedSource = setEnvironment(source);

  this.callback(null, updatedSource, map);
}

module.exports = loader;
