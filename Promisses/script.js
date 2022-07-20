// Criação de promessa

const myPromise = new Promise((resolve, reject) => {
    const nome = 'David'

    if(nome === 'David') {
        resolve('Usuário David foi encontrado!')
    } else {
        reject('O usuário não foi encontrado!')
    }
})

myPromise.then((data) => {
    console.log(data)
})

// Encadeamento de then's

const myPromise2 = new Promise((resolve, reject) => {
    const nome = 'João'

    if(nome === 'João') {
        resolve('Usuário João foi encontrado!')
    } else {
        reject('O usuário não foi encontrado!')
    }
})

myPromise2

.then((data) => {
    return data.toLowerCase()
})

.then((stringModificada) => {
    console.log(stringModificada)
})

//
