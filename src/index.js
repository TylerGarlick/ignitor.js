import Arango from 'arangojs';
import Query from './query';
import Collections from './collections';
import Collection from './collection';

export Model from './model';


export default class {

  constructor(url = '', databaseName = '', options = {}) {
    this.db = Arango({ url, databaseName});

    this.query = new Query(this.db);
    this.collections = new Collections(this.db);

//    return new Proxy(this, {
//
//      get: (target, prop) => {
//        if(!target[prop]) {
//          if(this.collections.exists(prop) && typeof(prop) !== 'object') {
//            console.log(prop);
//
////            console.log(prop);
////            this[prop] = new Collection(this.db, prop);
////            console.log(prop);
//          }
//
//        }
//
//
//
////        console.log(receiver);
//
//
//      }
//    });
  }

}
