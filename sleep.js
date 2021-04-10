const sleep = ms => new Promise(resolve => setTimeout(() => {resolve()}, ms))

sleep(2000).then(() => console.log('after 2 sex'))
sleep(3000).then(() => console.log('after 3 sec'))

Promise.all([sleep(2000), sleep(5000)])
.then(() => {
    console.log('After all promises')
})

Promise.race([[sleep(2000), sleep(5000)]])
.then(() => {
    console.log('Race promises')
})