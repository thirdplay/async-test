readFile('hoge.txt', function (hoge) {
  readFile('fuga.txt', function (fuga) {
    readFile('foo.txt', function (foo) {
      readFile('bar.txt', function (bar) {
        console.log(hoge + fuga + foo + bar)
      })
    })
  })
})
