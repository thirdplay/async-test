const promise = function(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(str), 500)
  })
}

promise('foo')
  .then(
    (val) => {
      console.log(val)
      return promise('bar')
    })
  .then((val) => console.log(val))
  .catch((err) => console.log(err))
