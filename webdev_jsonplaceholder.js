fetch('https://jsonplaceholder.typicode.cm/posts')
.then(res => res.json())
.then(data => console.log(data))
.catch((e) => console.warn('ERROR_DESCRIPTION: ', e))