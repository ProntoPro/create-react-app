const mock = 'export default undefined\n';
const nativeRegExp = /[\\/]native[\\/]/;

module.exports = function nativeNullLoader(content) {
  this.cacheable();

  return nativeRegExp.test(this.resourcePath.toLowerCase()) ? mock : content;
};
