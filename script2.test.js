
//Writing Asynchronous code
const fetch = require('node-fetch');
const swapi = require('./script2');


it('calls swapi to fetch people', () => {
    swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87)
    })
})