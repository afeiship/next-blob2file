(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.blob2file = function (inBlob, inFilename) {
    var filename = inFilename || 'untitled';
    var options = { type: inBlob.type, lastModified: Date.now() };
    return new File([inBlob], filename, options);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.blob2file;
  }
})();
