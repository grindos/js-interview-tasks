// There is an array of URLs:

let urls = [
  'user.json',
  'guest.json'
]

// We need to load all of them one by one and save results to an array

let chain = Promise.resolve()

let results = []

urls.forEach(function(url) {
  chain = chain
    .then(() => httpGet(url))
    .then((result) => {
      results.push(result)
    })
})

chain.then(() => {
  console.log(results)
})