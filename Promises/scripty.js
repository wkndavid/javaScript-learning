const myPromise4 = new Promise((resolve, reject) => {
    const phone = 980

    if(phone == 'david') {
        resolve('Número 98000-0000')
    } else {
        reject('No is Number!')
    }
})

myPromise4.then((data) => {
    console.log(data)
})

// Retorno do Catch
// Catch: Trata o que é recebido de Erro!
const promisseRetornoDoCatch = new Promise((resolve, reject) => {
    const errorCatch = 'done'
    
    if (errorCatch === 'erroR') {
        resolve('')
    } else {
        reject('Consulta não encontrada!')
    }
})

promisseRetornoDoCatch.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log('Aconteceu um erro: ' + err)
})

// Resolver várias promessas com all()

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 Ok! Timeout')
    }, 2500)
})
const p2 = new Promise((resolve, reject) => {
    resolve('P2 ok!')
})
const p3 = new Promise((resolve, reject) => {
    resolve('P3 ok!')
})

// As Promessas p2 e p3 aguardam a Promessa p1 ser resovilda e em seguida executadas.

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})

console.log('Depois do all()')

// Várias Promessas com race()

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P4 Ok! Timeout')
    }, 2500)
})
const p5 = new Promise((resolve, reject) => {
    resolve('P5 ok!')
})
const p6 = new Promise((resolve, reject) => {
    resolve('P6 ok!')
})

// As Promessas p5 e p6 aguardam a Promessa p4 ser resovilda e em seguida executadas.

const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data)
})
