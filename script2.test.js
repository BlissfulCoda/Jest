
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



it('getPeople returns counts and results', () => {
    const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
        json: () => Promise.resolve({
            count: 87,
            results: [0,1,2,3,4,5]
        })
    }))

    //always use expect.assertions to make sure the assertions are being called
    expect.assertions(2)
    return swapi.getPeoplePromise(mockFetch).then(data => {
        expect(mockFetch.mock.calls.length).toBe(1)
        expect(mockFetch).toBeCalledWith('https://swapi.py4e.com/api/people');
    })
})



//Jest Cheat Sheet - Really useful for running perfect tests
//https://github.com/sapegin/jest-cheat-sheet