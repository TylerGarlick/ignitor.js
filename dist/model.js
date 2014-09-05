System.register(["./database"], function($__export) {
  "use strict";
  var Promise,
      _,
      Validator,
      database,
      Model;
  return {
    setters: [function(m) {
      database = m.database;
    }],
    execute: function() {
      Promise = require('bluebird'), _ = require('lodash'), Validator = require('jsonschema').validate;
      Model = $__export("Model", (function() {
        var Model = function Model(collection, properties) {
          this._key = null;
          this._rev = null;
          this._id = null;
          this.collection = collection;
          this.properties = properties;
          this.methods = {};
          this.hooks = {
            validating: {
              pre: [],
              post: []
            },
            saving: {
              pre: [],
              post: []
            },
            deletion: {
              pre: [],
              post: []
            }
          };
        };
        return ($traceurRuntime.createClass)(Model, {
          get isNew() {
            return !this._id && !this._key;
          },
          get errors() {
            var validationErrors = [];
            if (this.properties)
              return Validator(this, {
                type: 'object',
                properties: this.properties
              }).errors || validationErrors;
            return validationErrors;
          },
          get isValid() {
            return this.errors.length > 0;
          }
        }, {
          all: function(options) {
            return this.db.simple.listAsync(this.collection, options);
          },
          findByKey: function(id) {
            return this.db.simple.firstByExampleAsync(this.collection, {_key: id});
          },
          find: function(predicate) {
            var options = arguments[1] !== (void 0) ? arguments[1] : {};
            return this.db.simple.exampleAsync(this.collection, predicate, options);
          },
          query: function(query) {
            var params = arguments[1] !== (void 0) ? arguments[1] : {};
            var options = arguments[2] !== (void 0) ? arguments[2] : {};
            return this.db.query.execAsync(query, params, options);
          },
          exists: function(predicate) {
            var options = arguments[1] !== (void 0) ? arguments[1] : {};
            return this.db.simple.firstByExampleAsync(this.collection, predicate, options);
          },
          save: function(entity) {
            var options = arguments[1] !== (void 0) ? arguments[1] : {
              createCollection: true,
              waitForSync: true
            };
            if (entity._id) {
              if (entity._id)
                delete entity._id;
              if (entity._key)
                delete entity._key;
              if (entity._rev)
                delete entity._rev;
              return this.db.document.putAsync(entity._id, entity).then(this.single(entity._id));
            } else
              return this.db.createAsync(this.collection, entity, options).then(this.single(entity._id));
          },
          delete: function(id) {
            var options = arguments[1] !== (void 0) ? arguments[1] : {};
            return this.db.document.deleteAsync(id, options);
          },
          deleteAll: function(predicate) {
            var options = arguments[1] !== (void 0) ? arguments[1] : {};
            return this.db.simple.removeByExampleAsync(this.collection, predicate, options);
          },
          initialize: function(collection, schema) {
            var options = arguments[2] !== (void 0) ? arguments[2] : {};
            var Stereotype = function Stereotype(instance) {
              $traceurRuntime.superCall(this, $Stereotype.prototype, "constructor", [collection, schema]);
              _.merge(this, instance);
              _.merge(this, this.methods);
            };
            var $Stereotype = Stereotype;
            ($traceurRuntime.createClass)(Stereotype, {}, {}, Model);
            if (options.statics) {
              _.merge(Stereotype, options.statics);
            }
            return Stereotype;
          }
        });
      }()));
    }
  };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8yIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzEiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvNCIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8zIiwibW9kZWwuanMiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvNSIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8xMCIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci83IiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzYiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvOSIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci84Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEtBQUssU0FBUyxBQUFDLGdCQUFvQixVQUFTLFNBQVE7Ozs7Ozs7QUNBcEQsT0FBTztBQUNELFVBQU0sR0NEWixTQUFTLENBQUEsQ0FBRztBQ0FaLGVBQW9CLEVBQUEsU0FBa0IsQ0FBQztJREUvQixDRER1QjtBQUN6QixVQUFNO2NHRkUsQ0FBQSxPQUFNLEFBQUMsQ0FBQyxVQUFTLENBQUMsS0FBTyxDQUFBLE9BQU0sQUFBQyxDQUFDLFFBQU8sQ0FBQyxhQUFlLENBQUEsT0FBTSxBQUFDLENBQUMsWUFBVyxDQUFDLFNBQVM7WUNBM0UsQ0FBQSxTQUFRLEFBQUMsV0NBakMsU0FBUSxBQUFDO0FBQ0MsQUFBSSxVQUFBLFFGTVAsU0FBTSxNQUFJLENBUUQsVUFBUyxDQUFHLENBQUEsVUFBUyxDQUFHO0FBQ3BDLGFBQUcsS0FBSyxFQUFJLEtBQUcsQ0FBQztBQUNoQixhQUFHLEtBQUssRUFBSSxLQUFHLENBQUM7QUFDaEIsYUFBRyxJQUFJLEVBQUksS0FBRyxDQUFDO0FBRWYsYUFBRyxXQUFXLEVBQUksV0FBUyxD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QUE7QUNBeEMsWUFBQyxlQUFjLFlBQVksQ0FBQyxBQUFDLG9CTnVHQSxNQUFJLENNdEd1QjtBTmlIcEQsZUFBSSxPQUFNLFFBQVEsQ0FBRztBQUNuQixjQUFBLE1BQU0sQUFBQyxDQUFDLFVBQVMsQ0FBRyxDQUFBLE9BQU0sUUFBUSxDQUFDLENBQUM7WUFDdEM7QUFBQSxBQUVBLGlCQUFPLFdBQVMsQ0FBQztVQUNuQjtTRXBIOEQsQ0FBQztNQUN6RCxBQUFDLEVBQUMsRURKNEQ7SUpFdkM7RUFDM0IsQ0FBQTtBRERJLENBQUMsQ0FBQztBSXdIViIsImZpbGUiOiJtb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlN5c3RlbS5yZWdpc3RlcigkX19wbGFjZWhvbGRlcl9fMCwgZnVuY3Rpb24oJF9fZXhwb3J0KSB7XG4gICAgICAgICAgJF9fcGxhY2Vob2xkZXJfXzFcbiAgICAgICAgfSk7IiwicmV0dXJuIHtcbiAgICAgIHNldHRlcnM6ICRfX3BsYWNlaG9sZGVyX18wLFxuICAgICAgZXhlY3V0ZTogJF9fcGxhY2Vob2xkZXJfXzFcbiAgICB9IiwiZnVuY3Rpb24obSkge1xuICAgICAgICAgICRfX3BsYWNlaG9sZGVyX18wXG4gICAgICAgIH0iLCIkX19wbGFjZWhvbGRlcl9fMCA9IG0uJF9fcGxhY2Vob2xkZXJfXzE7IiwidmFyIFByb21pc2UgPSByZXF1aXJlKCdibHVlYmlyZCcpLCBfID0gcmVxdWlyZSgnbG9kYXNoJyksIFZhbGlkYXRvciA9IHJlcXVpcmUoJ2pzb25zY2hlbWEnKS52YWxpZGF0ZTtcblxuaW1wb3J0IHtkYXRhYmFzZX0gZnJvbSAnLi9kYXRhYmFzZSc7XG5cbi8qKlxuICogTW9kZWxcbiAqL1xuZXhwb3J0IGNsYXNzIE1vZGVsIHtcblxuICAvKipcbiAgICogTW9kZWwgY29uc3RydWN0b3JcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSBjb2xsZWN0aW9uXG4gICAqIEBwYXJhbSBwcm9wZXJ0aWVzXG4gICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbGxlY3Rpb24sIHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLl9rZXkgPSBudWxsO1xuICAgIHRoaXMuX3JldiA9IG51bGw7XG4gICAgdGhpcy5faWQgPSBudWxsO1xuXG4gICAgdGhpcy5jb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgIHRoaXMubWV0aG9kcyA9IHt9O1xuICAgIC8vdGhpcy5kYiA9IFByb21pc2UucHJvbWlzaWZ5QWxsKGRhdGFiYXNlLmRiKTtcblxuICAgIHRoaXMuaG9va3MgPSB7XG4gICAgICB2YWxpZGF0aW5nOiB7XG4gICAgICAgIHByZTogW10sXG4gICAgICAgIHBvc3Q6IFtdXG4gICAgICB9LFxuXG4gICAgICBzYXZpbmc6IHtcbiAgICAgICAgcHJlOiBbXSxcbiAgICAgICAgcG9zdDogW11cbiAgICAgIH0sXG5cbiAgICAgIGRlbGV0aW9uOiB7XG4gICAgICAgIHByZTogW10sXG4gICAgICAgIHBvc3Q6IFtdXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlzTmV3KCkge1xuICAgIHJldHVybiAhdGhpcy5faWQgJiYgIXRoaXMuX2tleTtcbiAgfVxuXG4gIGdldCBlcnJvcnMoKSB7XG4gICAgdmFyIHZhbGlkYXRpb25FcnJvcnMgPSBbXTtcbiAgICBpZiAodGhpcy5wcm9wZXJ0aWVzKVxuICAgICAgcmV0dXJuIFZhbGlkYXRvcih0aGlzLCB7IHR5cGU6ICdvYmplY3QnLCBwcm9wZXJ0aWVzOiB0aGlzLnByb3BlcnRpZXMgfSkuZXJyb3JzIHx8IHZhbGlkYXRpb25FcnJvcnM7XG5cbiAgICByZXR1cm4gdmFsaWRhdGlvbkVycm9ycztcbiAgfVxuXG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLmVycm9ycy5sZW5ndGggPiAwO1xuICB9XG5cblxuICBzdGF0aWMgYWxsKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5kYi5zaW1wbGUubGlzdEFzeW5jKHRoaXMuY29sbGVjdGlvbiwgb3B0aW9ucyk7XG4gIH1cblxuICBzdGF0aWMgZmluZEJ5S2V5KGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuZGIuc2ltcGxlLmZpcnN0QnlFeGFtcGxlQXN5bmModGhpcy5jb2xsZWN0aW9uLCB7IF9rZXk6IGlkIH0pO1xuICB9XG5cbiAgc3RhdGljIGZpbmQocHJlZGljYXRlLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5kYi5zaW1wbGUuZXhhbXBsZUFzeW5jKHRoaXMuY29sbGVjdGlvbiwgcHJlZGljYXRlLCBvcHRpb25zKTtcbiAgfVxuXG4gIHN0YXRpYyBxdWVyeShxdWVyeSwgcGFyYW1zID0ge30sIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmRiLnF1ZXJ5LmV4ZWNBc3luYyhxdWVyeSwgcGFyYW1zLCBvcHRpb25zKTtcbiAgfVxuXG4gIHN0YXRpYyBleGlzdHMocHJlZGljYXRlLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5kYi5zaW1wbGUuZmlyc3RCeUV4YW1wbGVBc3luYyh0aGlzLmNvbGxlY3Rpb24sIHByZWRpY2F0ZSwgb3B0aW9ucyk7XG4gIH1cblxuICBzdGF0aWMgc2F2ZShlbnRpdHksIG9wdGlvbnMgPSB7IGNyZWF0ZUNvbGxlY3Rpb246IHRydWUsIHdhaXRGb3JTeW5jOiB0cnVlIH0pIHtcbiAgICBpZiAoZW50aXR5Ll9pZCkge1xuICAgICAgaWYgKGVudGl0eS5faWQpIGRlbGV0ZSBlbnRpdHkuX2lkO1xuICAgICAgaWYgKGVudGl0eS5fa2V5KSBkZWxldGUgZW50aXR5Ll9rZXk7XG4gICAgICBpZiAoZW50aXR5Ll9yZXYpIGRlbGV0ZSBlbnRpdHkuX3JldjtcblxuICAgICAgcmV0dXJuIHRoaXMuZGIuZG9jdW1lbnQucHV0QXN5bmMoZW50aXR5Ll9pZCwgZW50aXR5KVxuICAgICAgICAudGhlbih0aGlzLnNpbmdsZShlbnRpdHkuX2lkKSk7XG4gICAgfSBlbHNlXG4gICAgICByZXR1cm4gdGhpcy5kYi5jcmVhdGVBc3luYyh0aGlzLmNvbGxlY3Rpb24sIGVudGl0eSwgb3B0aW9ucylcbiAgICAgICAgLnRoZW4odGhpcy5zaW5nbGUoZW50aXR5Ll9pZCkpO1xuICB9XG5cbiAgc3RhdGljIGRlbGV0ZShpZCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuZGIuZG9jdW1lbnQuZGVsZXRlQXN5bmMoaWQsIG9wdGlvbnMpO1xuICB9XG5cbiAgc3RhdGljIGRlbGV0ZUFsbChwcmVkaWNhdGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmRiLnNpbXBsZS5yZW1vdmVCeUV4YW1wbGVBc3luYyh0aGlzLmNvbGxlY3Rpb24sIHByZWRpY2F0ZSwgb3B0aW9ucyk7XG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbGl6ZShjb2xsZWN0aW9uLCBzY2hlbWEsIG9wdGlvbnMgPSB7fSkge1xuXG4gICAgY2xhc3MgU3RlcmVvdHlwZSBleHRlbmRzIE1vZGVsIHtcbiAgICAgIGNvbnN0cnVjdG9yKGluc3RhbmNlKSB7XG4gICAgICAgIHN1cGVyKGNvbGxlY3Rpb24sIHNjaGVtYSk7XG5cbiAgICAgICAgXy5tZXJnZSh0aGlzLCBpbnN0YW5jZSk7XG4gICAgICAgIF8ubWVyZ2UodGhpcywgdGhpcy5tZXRob2RzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL1RPRE86IFNldHVwIFN0YXRpY3NcblxuICAgIGlmIChvcHRpb25zLnN0YXRpY3MpIHtcbiAgICAgIF8ubWVyZ2UoU3RlcmVvdHlwZSwgb3B0aW9ucy5zdGF0aWNzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gU3RlcmVvdHlwZTtcbiAgfVxuXG5cbn0iLCJ2YXIgJF9fcGxhY2Vob2xkZXJfXzAgPSAkX19leHBvcnQoJF9fcGxhY2Vob2xkZXJfXzEsICRfX3BsYWNlaG9sZGVyX18yKTsiLCJmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgJF9fcGxhY2Vob2xkZXJfXzAgPSAkX19wbGFjZWhvbGRlcl9fMTtcbiAgICAgICAgICByZXR1cm4gKCR0cmFjZXVyUnVudGltZS5jcmVhdGVDbGFzcykoJF9fcGxhY2Vob2xkZXJfXzIsICRfX3BsYWNlaG9sZGVyX18zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkX19wbGFjZWhvbGRlcl9fNCk7XG4gICAgICAgIH0oKSIsInZhciAkX19wbGFjZWhvbGRlcl9fMCA9ICRfX3BsYWNlaG9sZGVyX18xIiwiJHRyYWNldXJSdW50aW1lLnN1cGVyQ2FsbCgkX19wbGFjZWhvbGRlcl9fMCwgJF9fcGxhY2Vob2xkZXJfXzEsICRfX3BsYWNlaG9sZGVyX18yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkX19wbGFjZWhvbGRlcl9fMykiLCJ2YXIgJF9fcGxhY2Vob2xkZXJfXzAgPSAkX19wbGFjZWhvbGRlcl9fMSIsIigkdHJhY2V1clJ1bnRpbWUuY3JlYXRlQ2xhc3MpKCRfX3BsYWNlaG9sZGVyX18wLCAkX19wbGFjZWhvbGRlcl9fMSwgJF9fcGxhY2Vob2xkZXJfXzIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkX19wbGFjZWhvbGRlcl9fMykiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=