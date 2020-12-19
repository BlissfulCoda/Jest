const googleDatase = [
    'cats.com',
    'catsallgood',
    'soups.com',
    'flowers.com',
    'happymeals.com',
    'prestzels.com'
]

const googleSearch = (searchInput, db) => {
    const matches = db.filter(website => {
        return website.includes(searchInput);
    })
    return matches.length > 2 ? matches.slice(0, 2) : matches;
}

// console.log(googleSearch('flower', googleDatabase))

module.exports = googleSearch;