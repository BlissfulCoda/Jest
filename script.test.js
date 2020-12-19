const googleSearch = require('./script');

dbMock = [
    'cats.com',
    'catsallgood',
    'helloWorld.com',
    'Avatar.com',
    'DBS.com'
];
it('this is a test', () => {
  // googleSearch('testtest', dbMock)
  expect('hello').toBe('hello');
});

it('it is searching google', () => {
  expect(googleSearch('testtest', dbMock)).toEqual([]);
  expect(googleSearch('cats', dbMock)).toEqual(['cats.com',
  'catsallgood']);
});
