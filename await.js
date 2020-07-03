async function readFiles(){
  const hoge = await readFileAsync('hoge.txt')
  const fuga = await readFileAsync('fuga.txt') 
  const foo = await readFileAsync('foo.txt') 
  const bar = await readFileAsync('bar.txt')
  console.log(hoge + fuga + foo + foo)
}

readFiles()
