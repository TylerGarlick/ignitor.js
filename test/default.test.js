import Test from 'ava';
import Ignitor, { Model } from '../src';

Test('works', t => {
  t.truthy(true);
});

Test('Ignitor with defaults', t => {
  const ignitor = Ignitor();
  t.truthy(ignitor.db);
});

Test('Ignitor with defaults', t => {
  const ignitor = Ignitor('');
  t.truthy(ignitor.db);
});

Test('Ignitor setup lists proper databases', async t => {
  const ignitor = Ignitor({ username: 'root', password: 'orange5' });
  await ignitor.setup({ databaseName: 'bogus' });
});

Test('Model is exported', async t => {
  const model = new Model();
  t.truthy(model);
  t.truthy(model.find);
  console.log(Model);
});
