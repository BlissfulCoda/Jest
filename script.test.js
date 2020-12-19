const googleSearch = require('./script');

//For Dev purposes, the more tests, the better
dbMock = [
    'cats.com',
    'catsallgood.com',
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
  'catsallgood.com']);
});

it('work with undefined and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([])
    expect(googleSearch(null, dbMock)).toEqual([])
})

it('does not return more than 2 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3)
})