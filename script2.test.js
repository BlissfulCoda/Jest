
//Writing Asynchronous code
const fetch = require('node-fetch');
const swapi = require('./script2');

//using done to check if the promise is 
it('calls swapi to fetch people', (done) => {
    //always test our expect aasertions when using async code
    expect.assertions(1)
    swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87)
        done();
    })
})

it('calls swapi to fetch people with a promise', () => {
    expect.assertions(2)
    return swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(87)
        expect(data.results.length).toBeGreaterThan(5)
    })
})

//Jest Cheat Sheet - Really useful for running perfect tests
//https://github.com/sapegin/jest-cheat-sheet