System.register([], function($__export) {
  "use strict";
  var Arango,
      Database;
  return {
    setters: [],
    execute: function() {
      Arango = require('arango');
      Database = $__export("Database", {
        use: function(connection) {
          this.connection = connection;
        },
        connect: function(url) {
          this.url = url;
          this.connection = Arango.Connection(url);
        },
        get url() {
          return this.url;
        },
        set url(val) {
          this.url = val;
        },
        get db() {
          return this.connection;
        }
      });
    }
  };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8yIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzEiLCJkYXRhYmFzZS5qcyIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8wIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEtBQUssU0FBUyxBQUFDLElBQW9CLFVBQVMsU0FBUTs7OztBQ0FwRCxPQUFPO0FBQ0QsVUFBTSxJQUFtQjtBQUN6QixVQUFNO2FDRkMsQ0FBQSxPQUFNLEFBQUMsQ0FBQyxRQUFPLENBQUM7ZUNBN0IsQ0FBQSxTQUFRLEFBQUMsWURFYTtBQUNwQixVQUFFLENBQUYsVUFBSSxVQUFTLENBQUc7QUFDZCxhQUFHLFdBQVcsRUFBSSxXQUFTLENBQUM7UUFDOUI7QUFFQSxjQUFNLENBQU4sVUFBUSxHQUFFLENBQUc7QUFDWCxhQUFHLElBQUksRUFBSSxJQUFFLENBQUM7QUFDZCxhQUFHLFdBQVcsRUFBSSxDQUFBLE1BQUssV0FBVyxBQUFDLENBQUMsR0FBRSxDQUFDLENBQUM7UUFDMUM7QUFFQSxVQUFJLElBQUUsRUFBSTtBQUNSLGVBQU8sQ0FBQSxJQUFHLElBQUksQ0FBQztRQUNqQjtBQUVBLFVBQUksSUFBRSxDQUFFLEdBQUUsQ0FBRztBQUNYLGFBQUcsSUFBSSxFQUFJLElBQUUsQ0FBQztRQUNoQjtBQUVBLFVBQUksR0FBQyxFQUFJO0FBQ1AsZUFBTyxDQUFBLElBQUcsV0FBVyxDQUFDO1FBQ3hCO0FBQUEsTUFFRixDQ3hCOEM7SUZFZjtFQUMzQixDQUFBO0FEREksQ0FBQyxDQUFDO0FFc0JUIiwiZmlsZSI6ImRhdGFiYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiU3lzdGVtLnJlZ2lzdGVyKCRfX3BsYWNlaG9sZGVyX18wLCBmdW5jdGlvbigkX19leHBvcnQpIHtcbiAgICAgICAgICAkX19wbGFjZWhvbGRlcl9fMVxuICAgICAgICB9KTsiLCJyZXR1cm4ge1xuICAgICAgc2V0dGVyczogJF9fcGxhY2Vob2xkZXJfXzAsXG4gICAgICBleGVjdXRlOiAkX19wbGFjZWhvbGRlcl9fMVxuICAgIH0iLCJ2YXIgQXJhbmdvID0gcmVxdWlyZSgnYXJhbmdvJyk7XG5cbmV4cG9ydCB2YXIgRGF0YWJhc2UgPSB7XG4gIHVzZShjb25uZWN0aW9uKSB7XG4gICAgdGhpcy5jb25uZWN0aW9uID0gY29ubmVjdGlvbjtcbiAgfSxcblxuICBjb25uZWN0KHVybCkge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIHRoaXMuY29ubmVjdGlvbiA9IEFyYW5nby5Db25uZWN0aW9uKHVybCk7XG4gIH0sXG5cbiAgZ2V0IHVybCgpIHtcbiAgICByZXR1cm4gdGhpcy51cmw7XG4gIH0sXG5cbiAgc2V0IHVybCh2YWwpIHtcbiAgICB0aGlzLnVybCA9IHZhbDtcbiAgfSxcblxuICBnZXQgZGIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbjtcbiAgfVxuXG59OyIsIiRfX2V4cG9ydCgkX19wbGFjZWhvbGRlcl9fMCwgJF9fcGxhY2Vob2xkZXJfXzEpIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9