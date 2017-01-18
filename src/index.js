import Arango from 'arangojs';

import Query from './query';
import Collections from './collections';
import Collection from './collection';


export Model from './model';


const Ignitor = {

  async connect({ protocol = 'http', host = 'localhost', port = 8529, database = '_system', username = '', password = '' } = {}, options = {}) {

    const connection = Ignitor.connection = {
      url: `${protocol}://${username}:${password}@${host}:${port}`,
      databaseName: database
    };

    const db = Ignitor.db = Arango(connection);

    const query = Ignitor.query = Query(db);
    const collections = Ignitor.collections = Collections(db);
    const collection = Ignitor.collection = async name => Collection(db, name);

    await this.refreshCollections();

    return {
      db,
      query,
      collections,
      collection,
    };

  },

  async refreshCollections() {
    (await Ignitor.collections.all())
      .map(c => c.name)
      .forEach(c => {
        Ignitor[c] = Ignitor.collection(c);
      });
  },

  model(name, schema, options = {}) {
    return {};
  }
};

Ignitor.__models = {};


export default Ignitor;
