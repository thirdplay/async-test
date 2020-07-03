const hoge = readFileAsync('hoge.txt')
const fuga = readFileAsync('fuga.txt')
const foo = readFileAsync('foo.txt')
const bar = readFileAsync('bar.txt')

Promise.all([hoge, fuga, foo, bar])
  .then((values) => console.log(values[0] + values[1] + values[2] + values[3]))
