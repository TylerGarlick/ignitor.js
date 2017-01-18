import Arango from 'arangojs';
import Query from './query';
import Collections from './collections';
import Collection from './collection';

export Model from './model';


export default class {

  constructor(url = '', databaseName = '', options = {}) {
    this.db = Arango({ url, databaseName });

    this.query = new Query(this.db);
    this.collections = new Collections(this.db);

    return new Proxy(this, {
      get(target, prop) {
        if (!target[prop]) {
          target[prop] = new Collection(target.db, prop);
        }
        return target[prop];
      }
    });
  }


  async connect({ protocol = 'http', host: 'localhost', port = 8529, database = '_system', username = '', password = '' } = {}, options = {}) {

    const db = Arango({
      url: `${protocol}://${username}:${password}@${host}:${port}`,
      databaseName: database
    });

    const query = new Query(db);
    const collections = new Collections(db);

    const ignitor = {
      db,
      query,
      collections
    };

    return new Proxy(ignitor, {
      get(target, prop) {
        if (!target[prop]) {
          target[prop] = new Collection(target.db, prop);
        }
        return target[prop];
      }
    })
  }

}
