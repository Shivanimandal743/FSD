const myPromise = new Promise((resolve, reject) => {
    int age = 5;
    if (age>18){
        resolve("eligible for vote")
    } else {
        reject("Not eligible")
    }
})

myPromise.then((msg) => console.log(msg)
    .catch((error) => console.log(error))