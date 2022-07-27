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
