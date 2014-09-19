'use strict';

var Utils = require('../lib/utils');

require('chai').should();

describe('Utils', function () {

  describe('strings', function () {

    describe('pluralize', function () {

      it('should be able to pluralize strings correctly', function () {

        Utils.strings.pluralize('dog').should.be.eql('dogs');
        Utils.strings.pluralize('person').should.be.eql('people');
        Utils.strings.pluralize('order').should.be.eql('orders');

      });
    });

  });

  describe('keys', function () {

    describe('format', function () {

      Utils.keys.format('myKey').should.be.eql('mykey');
      Utils.keys.format(' myKey').should.be.eql('mykey');
      Utils.keys.format('myKey ').should.be.eql('mykey');
      Utils.keys.format(' myKey 123').should.be.eql('mykey123');

    });

  });

});