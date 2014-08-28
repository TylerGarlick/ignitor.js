var Arango = require('arango');

export var Database = {
  use(connection) {
    this.connection = connection;
  },

  connect(url) {
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

};