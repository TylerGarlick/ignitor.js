var System = require('systemjs');
require('chai').should();

describe('ignitor', function () {

  var Ignitor;
  before(function (next) {
    System.import('../src/ignitor')
      .then(function (m) {
        Ignitor = m.Ignitor;

        Ignitor.should.be.ok;
        next();
      }, function (err) {
        console.log(err);
        throw err;
      });
  });


  it('should fail', function () {
    console.log(Ignitor);
    var Blah = Ignitor.model('blah', {});
    console.log(Ignitor.models);
    var blah = new Blah({});
    console.log(blah);
  });

});
