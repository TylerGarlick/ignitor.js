import Test from 'ava';
import Ignitor from '../src';

Test('#all()', async t => {
  const ignitor = new Ignitor('http://root:orange5@localhost:8529', 'testing');

//  const collections = await ignitor.collections.all();
  ignitor.collections.all()
         .then(collections => {
    console.log(collections);
  });
//  console.log();d
});
