System.register(["./database", "./utilities", "./model"], function($__export) {
  "use strict";
  var Database,
      StringUtilities,
      Model,
      internals,
      Ignitor;
  return {
    setters: [function(m) {
      Database = m.Database;
    }, function(m) {
      StringUtilities = m.StringUtilities;
    }, function(m) {
      Model = m.Model;
    }],
    execute: function() {
      internals = {
        models: {},
        settings: {pluralize: true}
      };
      Ignitor = $__export("Ignitor", {
        connect: function(url) {
          this.db = Database.connect(url);
        },
        model: function(name, schema) {
          var options = arguments[2] !== (void 0) ? arguments[2] : {
            methods: {},
            statics: {}
          };
          var key = StringUtilities.formatKey(name);
          var shouldPluralize = options.pluralize || internals.settings.pluralize;
          this.collection = shouldPluralize ? StringUtilities.pluralize(name) : name;
          if (options.collection)
            this.collection = options.collection;
          return internals.models[key] = Model.initialize(this.collection, schema, options);
        },
        get models() {
          return internals.models;
        }
      });
    }
  };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8yIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzEiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvNCIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8zIiwiaWduaXRvci5qcyIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8wIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEtBQUssU0FBUyxBQUFDLDBDQUFvQixVQUFTLFNBQVE7Ozs7Ozs7QUNBcEQsT0FBTztBQUNELFVBQU0sR0NEWixTQUFTLENBQUEsQ0FBRztBQ0FaLGVBQW9CLEVBQUEsU0FBa0IsQ0FBQztJREUvQixDQUZSLFVBQVMsQ0FBQSxDQUFHO0FDQVosc0JBQW9CLEVBQUEsZ0JBQWtCLENBQUM7SURFL0IsQ0FGUixVQUFTLENBQUEsQ0FBRztBQ0FaLFlBQW9CLEVBQUEsTUFBa0IsQ0FBQztJREUvQixDRER1QjtBQUN6QixVQUFNO2dCR0VJO0FBQ2QsYUFBSyxDQUFHLEdBQUM7QUFDVCxlQUFPLENBQUcsRUFDUixTQUFRLENBQUcsS0FBRyxDQUNoQjtBQUFBLE1BQ0Y7Y0NUQSxDQUFBLFNBQVEsQUFBQyxXRFlZO0FBTW5CLGNBQU0sQ0FBTixVQUFRLEdBQUUsQ0FBRztBQUNYLGFBQUcsR0FBRyxFQUFJLENBQUEsUUFBTyxRQUFRLEFBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQztRQUNqQztBQVNBLFlBQUksQ0FBSixVQUFNLElBQUcsQ0FBRyxDQUFBLE1BQUssQUFBd0MsQ0FBRztZQUF4QyxRQUFNLDZDQUFJO0FBQUUsa0JBQU0sQ0FBRyxHQUFDO0FBQUcsa0JBQU0sQ0FBRyxHQUFDO0FBQUEsVUFBRTtBQUV2RCxBQUFJLFlBQUEsQ0FBQSxHQUFFLEVBQUksQ0FBQSxlQUFjLFVBQVUsQUFBQyxDQUFDLElBQUcsQ0FBQyxDQUFDO0FBQ3pDLEFBQUksWUFBQSxDQUFBLGVBQWMsRUFBSSxDQUFBLE9BQU0sVUFBVSxHQUFLLENBQUEsU0FBUSxTQUFTLFVBQVUsQ0FBQztBQUN2RSxhQUFHLFdBQVcsRUFBSSxDQUFBLGVBQWMsRUFBSSxDQUFBLGVBQWMsVUFBVSxBQUFDLENBQUMsSUFBRyxDQUFDLENBQUEsQ0FBSSxLQUFHLENBQUM7QUFFMUUsYUFBSSxPQUFNLFdBQVc7QUFDbkIsZUFBRyxXQUFXLEVBQUksQ0FBQSxPQUFNLFdBQVcsQ0FBQztBQUFBLEFBRXRDLGVBQU8sQ0FBQSxTQUFRLE9BQU8sQ0FBRSxHQUFFLENBQUMsRUFBSSxDQUFBLEtBQUksV0FBVyxBQUFDLENBQUMsSUFBRyxXQUFXLENBQUcsT0FBSyxDQUFHLFFBQU0sQ0FBQyxDQUFDO1FBQ25GO0FBTUEsVUFBSSxPQUFLLEVBQUk7QUFDWCxlQUFPLENBQUEsU0FBUSxPQUFPLENBQUM7UUFDekI7QUFBQSxNQUVGLENDakQ4QztJSkVmO0VBQzNCLENBQUE7QURESSxDQUFDLENBQUM7QUkrQ1QiLCJmaWxlIjoiaWduaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlN5c3RlbS5yZWdpc3RlcigkX19wbGFjZWhvbGRlcl9fMCwgZnVuY3Rpb24oJF9fZXhwb3J0KSB7XG4gICAgICAgICAgJF9fcGxhY2Vob2xkZXJfXzFcbiAgICAgICAgfSk7IiwicmV0dXJuIHtcbiAgICAgIHNldHRlcnM6ICRfX3BsYWNlaG9sZGVyX18wLFxuICAgICAgZXhlY3V0ZTogJF9fcGxhY2Vob2xkZXJfXzFcbiAgICB9IiwiZnVuY3Rpb24obSkge1xuICAgICAgICAgICRfX3BsYWNlaG9sZGVyX18wXG4gICAgICAgIH0iLCIkX19wbGFjZWhvbGRlcl9fMCA9IG0uJF9fcGxhY2Vob2xkZXJfXzE7IiwiaW1wb3J0IHtEYXRhYmFzZX0gZnJvbSAnLi9kYXRhYmFzZSc7XG5pbXBvcnQge1N0cmluZ1V0aWxpdGllc30gZnJvbSAnLi91dGlsaXRpZXMnO1xuaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi9tb2RlbCc7XG5cbnZhciBpbnRlcm5hbHMgPSB7XG4gIG1vZGVsczoge30sXG4gIHNldHRpbmdzOiB7XG4gICAgcGx1cmFsaXplOiB0cnVlXG4gIH1cbn07XG5cblxuZXhwb3J0IHZhciBJZ25pdG9yID0ge1xuXG4gIC8qKlxuICAgKiBDb25uZWN0XG4gICAqIEBwYXJhbSB1cmxcbiAgICovXG4gIGNvbm5lY3QodXJsKSB7XG4gICAgdGhpcy5kYiA9IERhdGFiYXNlLmNvbm5lY3QodXJsKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBtb2RlbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge29iamVjdH0gc2NoZW1hXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIG1vZGVsKG5hbWUsIHNjaGVtYSwgb3B0aW9ucyA9IHsgbWV0aG9kczoge30sIHN0YXRpY3M6IHt9IH0pIHtcblxuICAgIHZhciBrZXkgPSBTdHJpbmdVdGlsaXRpZXMuZm9ybWF0S2V5KG5hbWUpO1xuICAgIHZhciBzaG91bGRQbHVyYWxpemUgPSBvcHRpb25zLnBsdXJhbGl6ZSB8fCBpbnRlcm5hbHMuc2V0dGluZ3MucGx1cmFsaXplO1xuICAgIHRoaXMuY29sbGVjdGlvbiA9IHNob3VsZFBsdXJhbGl6ZSA/IFN0cmluZ1V0aWxpdGllcy5wbHVyYWxpemUobmFtZSkgOiBuYW1lO1xuXG4gICAgaWYgKG9wdGlvbnMuY29sbGVjdGlvbilcbiAgICAgIHRoaXMuY29sbGVjdGlvbiA9IG9wdGlvbnMuY29sbGVjdGlvbjtcblxuICAgIHJldHVybiBpbnRlcm5hbHMubW9kZWxzW2tleV0gPSBNb2RlbC5pbml0aWFsaXplKHRoaXMuY29sbGVjdGlvbiwgc2NoZW1hLCBvcHRpb25zKTtcbiAgfSxcblxuICAvKipcbiAgICogR2V0IGFsbCB0aGUgbW9kZWxzXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgZ2V0IG1vZGVscygpIHtcbiAgICByZXR1cm4gaW50ZXJuYWxzLm1vZGVscztcbiAgfVxuXG59OyIsIiRfX2V4cG9ydCgkX19wbGFjZWhvbGRlcl9fMCwgJF9fcGxhY2Vob2xkZXJfXzEpIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9