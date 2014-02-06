'use strict';

var Database = require('../lib/infrastructure/database')
  , expect = require('expect.js')
  ;

describe('Database', function () {
  var connectionUrl = "http://tyler:orange5@localhost:8000/ignitor-testing";

  describe('.connect(connectionUrl)', function () {

    it('should connect and set the .db property', function () {
      var db = new Database();
      expect(db).to.be.ok();
      expect(Database.db).to.not.be.ok();
      expect(Database.db).to.be.null;
    });

    it('should be able to connect to the database', function () {
      var db = new Database();
      db.connect(connectionUrl);
      expect(Database.db).to.be.ok();
      expect(Database.db.connectionUrl).to.be(connectionUrl);
    });
  });

});