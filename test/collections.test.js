import Test from 'ava';
import Ignitor from '../src';

Test('#all()', async t => {
  const ignitor = new Ignitor('http://root:orange5@localhost:8529', 'testing');
  const collections = await ignitor.collections.all();
  t.ok(collections);
});

Test('#get(name)', async t => {
  const ignitor = new Ignitor('http://root:orange5@localhost:8529', 'testing');
  const collection = await ignitor.collections.get('tests');
  t.is(collection.name, 'tests');
});

Test('#get(name)', async t => {
  const ignitor = new Ignitor('http://root:orange5@localhost:8529', 'testing');
  t.truthy(await ignitor.collections.exists('tests'));
  console.log(ignitor.bogus);
});

