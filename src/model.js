import { mixin } from 'core-decorators';

class QueryMixin {

  async find(query = {}) {
    return [];
  }

  static blah = async() => {}

}

const FindMixin = {

  async find(query = {}) {
    return [];
  }
};


@mixin(FindMixin)
export default class {


}
