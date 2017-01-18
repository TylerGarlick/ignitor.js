import Test from 'ava';
import Ignitor, { Model } from '../src';

Test('can instantiate a new Ignitor', t => {
  const ignitor = new Ignitor('http://root:orange5@localhost:8529', 'testing');
  t.ok(ignitor.db);
//  console.log(ignitor.bogus);
});

Test('Model is exported', async t => {
  const model = new Model();
  t.truthy(model);
  t.truthy(model.find);
  console.log(Model);
});

