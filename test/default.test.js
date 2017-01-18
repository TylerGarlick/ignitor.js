import Test from 'ava';
import Ignitor, { Model } from '../src';

Test('works', t => {
  t.truthy(true);
});

Test('can instantiate a new Ignitor', t => {
  const ignitor = new Ignitor('http://root:orange5@localhost:8529', 'testing');
  console.log(ignitor);
//  console.log(ignitor.bogus);
});

//Test('Ignitor with defaults', t => {
//  const ignitor = Ignitor();
//  t.truthy(ignitor.db);
//});
//
//Test('Ignitor with defaults', t => {
//  const ignitor = Ignitor('');
//  t.truthy(ignitor.db);
//});
//
//Test('Ignitor setup lists proper databases', async t => {
//  const ignitor = Ignitor({ username: 'root', password: 'orange5' });
//  await ignitor.setup({ databaseName: 'bogus' });
//});

Test('Model is exported', async t => {
  const model = new Model();
  t.truthy(model);
  t.truthy(model.find);
  console.log(Model);
});
