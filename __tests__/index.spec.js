(function () {
  require('../src');

  const fetch = require('node-fetch');

  describe('api.basic test', () => {
    test('nx.blob2file should transfer blob to file', function (done) {
      fetch('https://dth-beta.alo7.com/alo7/ace/dsr_manager/lATPDhJzv_TUh4_OdTixz85UZwQr.amr')
        .then((res) => res.blob())
        .then((res) => {
          const file = nx.blob2file(res, 'lATPDhJzv_TUh4_OdTixz85UZwQr.amr');
          expect(file.type).toBe('application/octet-stream');
          expect(file.name).toBe('lATPDhJzv_TUh4_OdTixz85UZwQr.amr');
          expect(typeof file.lastModified).toBe('number')
          done();
        });
    });
  });
})();
