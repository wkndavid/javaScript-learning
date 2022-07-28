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

const betterDeveloper = 'david'

function whoIsBetterCallback(callback, errorCalback) {

    return new Promise((resolve, reject) => {

        if (betterDeveloper != 'isaac' && betterDeveloper != 'david') {
                errorCalback({
                    name: 'this is worong',
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