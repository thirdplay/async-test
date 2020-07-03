const deferred = function(str) {
  const d = new $.Deferred()
  setTimeout(() => d.resolve(str), 500)
  return d.promise()
}

deferred('foo')
  .then(
    (val) => {
      console.log(val)
      return deferred('bar')
    })
  .done((val) => console.log(val))
  .fail((err) => console.log(err))
