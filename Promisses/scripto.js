const myPromise3 = new Promise((resolve, reject) => {
    const esperado = 50

    if(esperado <= 60) {
        resolve('esperado acontecendo!')
    } else {
        reject('deu ruim')
    }
})

myPromise3
.then((dadosRecebidos) => {
    return dadosRecebidos.toUpperCase()
})
.then((dadosRecebidos) => {
    console.log(dadosRecebidos)
})
