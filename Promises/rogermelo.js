const url = 'https://dog.ceo/api/breeds/image/random'

fetch(url)
    .then((dogData) => {
        if (dogData.ok) {
            throw new Error(`HTTP error, status ${dogData.status}`)
        }
    })
    .catch((error) => {
        console.log(error.message)
    })