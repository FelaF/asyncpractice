let p = new Promise((resolve, reject) => {
    let a = 1 + 3
    if (a == 2){
        resolve('Suceess')
    }else {
        reject('Failed')
    }
})

p.then((message) => {
    console.log("This is in the then " + message)
}).catch((message) => {
    console.log("this is in the catch "+ message)
})