var expect = require('chai').expect;

var Ignitor = require('../../index');

describe('Ignitor', function () {

  describe('#connect(url)', function () {

    it('should be able to connect', function (next) {
      var db = Ignitor.connect('http://localhost:8529/ignitor-testing');
      expect(db).to.be.ok();
      expect(db._server.hostname).to.equal('localhost');
      expect(db._server.port).to.equal(8529);
      next();
    });

    it('should be able to connect, then access the connection through the getter', function (next) {
      Ignitor.connect('http://localhost:8529/ignitor-testing');
      var db = Ignitor.db;
      expect(db).to.be.ok();
      expect(db._server.hostname).to.equal('localhost');
      expect(db._server.port).to.equal(8529);
      next();
    });

  });

  describe('Schema', function () {

    it('should have access to the Schema object', function () {
      expect(Ignitor.Schema).to.be.ok();
      expect(Ignitor.Schema).to.be.a('function');
    });

  });

});