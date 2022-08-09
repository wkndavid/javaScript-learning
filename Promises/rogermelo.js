const url = 'https://dog.ceo/api/breeds/image/random'
const dogImg = document.querySelector('[data-js="dog-img"]')
console.log(dogImg)

const validateHTTPStatus = dogData => {
    if (!dogData.ok) {
        throw new Error(`HTTP error, status ${dogData.status}`)
    }
    return dogData.json()
}

const setDogImg = ({ message: url }) => {
    dogImg.setAttribute('src', url)
}

const handleRequestError = error => {
    console.log(error.message)
}

fetch(url)
    .then(validateHTTPStatus)
    .then(setDogImg)
    .catch(handleRequestError)
