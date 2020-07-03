async function readFiles() {
  const values = await Promise.all([
    readFileAsync('hoge.txt'),
    readFileAsync('fuga.txt'),
    readFileAsync('foo.txt'),
    readFileAsync('bar.txt'),
  ])
  console.log(values[0] + values[1] + values[2] + values[3])
}

readFiles()
