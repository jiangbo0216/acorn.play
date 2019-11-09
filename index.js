const {Parser} = require('acorn')

const a = Parser.parse("const a = 1")
const b = Parser.tokenizer('var b = 1')
console.log(JSON.stringify(a))
console.log(a)
console.log('==============')
console.log(JSON.stringify(b))