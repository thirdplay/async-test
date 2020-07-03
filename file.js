function readFile(fileName, success) {
  setTimeout(() => {
    if (typeof(success) === 'function') {
      success(fileName)
    }
  }, 500)
}
function readFileAsync(fileName) {
  const d = new $.Deferred()
  setTimeout(() => d.resolve(fileName), 500)
  return d.promise()
}
