import Test from 'ava';
import Ignitor, { Model } from '../src';

const connection = {
  username: 'root',
  password: 'orange5',
  database: 'testing'
};

Test('can instantiate a new Ignitor', async t => {
  const ignitor = await Ignitor.connect(connection);

  t.truthy(ignitor.db);
  t.truthy(Ignitor.db);

  t.truthy(ignitor.query);
  t.truthy(Ignitor.query);

  t.truthy(ignitor.collections);
  t.truthy(Ignitor.collections);

  t.truthy(ignitor.collection);
});

Test('Model is exported', async t => {
  const model = new Model();
  t.truthy(model);
  t.truthy(model.find);
  console.log(Model);
});

