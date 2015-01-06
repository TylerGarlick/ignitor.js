'use strict';

var expect = require('chai').expect;

var Arango = require('../../lib/arango');
var Mixins = require('../../lib/mixins');
var URL = 'http://localhost:8529/ignitor-testing';

describe('Mixins', function () {

  before(function () {
    Arango.connect(URL);
  });

  describe('#all(collection)', function () {

    it('should get all the documents in a known collection', function (done) {

      Mixins.all('v')
        .then(function (docs) {
          expect(docs).to.be.ok();
          expect(docs).to.not.be.empty();
          done();
        }).catch(function (e) {
          done(e);
        });

    })

  });

});