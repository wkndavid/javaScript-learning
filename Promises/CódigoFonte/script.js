// Função Síncrona
// Chamando funções externas
function sumNumbers() {
    let result = 1 + 1

    if (result == 2) {
        sucessCallback()
    } else {
        errorCallback()
    }
}

function sucessCallback() {
    console.log('Yeah! Number 2!')
}

function errorCallback() {
    console.log('Oops! Something wrong.')
}

sumNumbers();

// Promise {}

let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('Sucess!')
    } else {
        reject('Failed!')
    }
})
// Chamando Promise

p.then((message) => {
    console.log('this is the then method ' + message)
})
.catch((err) => {
    console.log('this is the catch method ' + err)
})

// Função em Promise

const betterDeveloper = 'isaac'

function whoIsBetterCallback(callback, errorCalback) {

    return new Promise((resolve, reject) => {

        if (betterDeveloper != 'isaac' && betterDeveloper != 'david') {
                errorCalback({
                    name: 'this is wrong',
                    message: betterDeveloper + 'Really'
                })
            } else {
                callback({
                    name: betterDeveloper,
                    message: 'CDFs are the best!'
                })
            }
        })
    }

whoIsBetterCallback()
.then((result) => {
    console.log(result.name + '? Yeah ' + result.message) 
})
.catch((error) => {
    console.log(error.name + ' ' + error.message)
})

// Exemplo Real

const ul = document.getElementById('users')
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        console.log(data)

        return data.map(function (user) {
            let li = document.createElement('li');
            li.innerHTML = `${user.name} (${user.username})`
            ul.appendChild(li)
        })
    })
    .catch((error) => {
        console.log('Oops ' + error)
    })