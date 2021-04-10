console.log('//Promise')
console.log('//-----------------------')

const promise = new Promise((res, rej) => {
    throw new Error('test error...')
    setTimeout(() => {
        if (true) {
            res('promise completed!')
        } else {
            rej()
        }
    }, 2000)


})
.then(data => console.log(data))
.catch((e) => console.log('error', e))