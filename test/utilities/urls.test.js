import Test from 'ava';
import * as Urls from '../../src/utilities/urls';

Test('defaults render proper connection', t => {
  const expectedUrl = 'http://localhost:8529';
  const url = Urls.convert();
  
  t.is(url, expectedUrl);
});

Test(`accepts auth parameters`, t => {
  const expectedUrl = 'http://test:test@localhost:8529';
  const url = Urls.convert({ username: 'test', password: 'test' });
  
  t.is(url, expectedUrl);
});

Test(`accepts databaseName`, t => {
  const expectedUrl = 'http://localhost:8529/_db/bogus';
  const url = Urls.convert({ databaseName: 'bogus' });
  
  t.is(url, expectedUrl);
});

Test('defaults render proper connection', t => {
  const expectedUrl = 'http://localhost:1111';
  const url = Urls.convert({ port: 1111 });
  
  t.is(url, expectedUrl);
});

Test('can switch to https', t => {
  const expectedUrl = 'https://localhost:8529';
  const url = Urls.convert({protocol: 'https'});
  
  t.is(url, expectedUrl);
});


