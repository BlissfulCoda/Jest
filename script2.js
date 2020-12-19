const fetch = require('node-fetch')

// const getPeople = fetch => {
//     return fetch('https://swapi.py4e.com/api/people')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         return {
//             count: data.count,
//             results: data.results
//         }
//     });
// }

//Used Async Await to make the code Synchronous 
const getPeople = async (fetch) => {
    const fetchRequest = await fetch('https://swapi.py4e.com/api/people')
    const data = await fetchRequest.json();
    console.log(data)
        return{
            count: data.count,
            results: data.results
        }
}

getPeople(fetch)