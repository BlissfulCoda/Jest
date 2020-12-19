const googleDatase = [
    'cats.com',
    'soups.com',
    'flowers.com',
    'happymeals.com',
    'prestzels.com'
]

const googleSearch = searchInput => {
    const matches = googleDatase.filter(website => {
        return website.includes(searchInput);
    })
    return matches.length > 2 ? matches.slice(0, 2) : matches;
}

// console.log(googleSearch('flower'))

module.exports = googleSearch;