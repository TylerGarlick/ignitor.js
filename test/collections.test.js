import Test from 'ava';
import Ignitor from '../src';

const connection = {
  username: 'root',
  password: 'orange5',
  database: 'testing'
};

Test('#all()', async t => {
  const ignitor = await Ignitor.connect(connection);

  const collections = await ignitor.collections.all();
  t.ok(collections);
});

Test('#get(name)', async t => {
  const ignitor = await Ignitor.connect(connection);

  const collection = await ignitor.collections.get('tests');
  t.is(collection.name, 'tests');
});

Test('#get(name)', async t => {
  const ignitor = await Ignitor.connect(connection);
  t.truthy(await ignitor.collections.exists('tests'));
  console.log(ignitor.tests);
});

