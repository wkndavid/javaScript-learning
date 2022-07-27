const myPromise4 = new Promise((resolve, reject) => {
    const phone = 980

    if(phone == typeof(Number)) {
        resolve('Número 98000-0000')
    } else {
        reject('No is Number!')
    }
})

myPromise4.then((data) => {
    console.log(data)
})