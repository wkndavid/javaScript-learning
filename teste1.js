const url = 'https://dog.ceo/api/breeds/image/random'
const dogImg = document.querySelector('[data-js="dog-img"]')
console.log(dogImg)

fetch(url)
    .then(dogData => {
        if (!dogData.ok) {
            throw new Error(`HTTP error, status ${dogData.status}`)
        }
        return dogData.json()
    })
    .then(({ message }) => {
        dogImg.setAttribute('src', message)
    })
    .catch(error => {
        console.log(error.message)
    })
    