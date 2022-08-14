const url = 'https://dog.ceo/api/breeds/image/random'
const dogImg = document.querySelector('[data-js="dog-img"]')
console.log(dogImg)

fetch(url)
    .then(dogData => {
        if (!dogData.ok) {
            throw new Error(`HTTP error, status ${dogData.status}`)


        }


    }
    .then(({ message }) => {
        dogImg.setAttribute('src', message)
    })
    lç,  




}


}


}
}
    .catch(error => {
        console.log(error.message)
    })
    .finally(data => {
        console.log(typeof data)
    })