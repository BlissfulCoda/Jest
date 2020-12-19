
//Writing Asynchronous code
const fetch = require('node-fetch');
const swapi = require('./script2');

//using done to check if the promise is 
it('calls swapi to fetch people', (done) => {
    expect.assertions(1)
    swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87)
        done();
    })
})

it('calls swapi to fetch people with a promise', () => {
    return swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(87)
    })
})