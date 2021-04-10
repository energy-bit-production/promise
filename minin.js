console.log('Request data')

// setTimeout(() => {
//     console.log('preparing data')

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data received', backendData)
//     }, 2000)
// }, 2000)

const superPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('preparing data...')

        resolve({
            server: 'aws',
            port: 2000,
            status: 'working'
        })
    }, 2000)
})
    .then((data) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                data.modified = true
                reject(data)
            }, 2000)
        })
    })
    .then(clientData => {
        console.log('promise resolved', clientData)
        clientData.fromPromise = true
        return clientData
    })
    .then(modidifedClientData => {
        console.log('modidifedClientData', modidifedClientData)
    })
    .catch(e => console.error('error: ', e))
    .finally(() => console.log('Finally!!!'))