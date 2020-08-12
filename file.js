function readFile(fileName, success) {
  setTimeout(() => {
    if (typeof(success) === 'function') {
      success(fileName)
    }
  }, 500)
}
function readFileAsync(fileName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(fileName), 500)
  })
}
