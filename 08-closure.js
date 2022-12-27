// A função "respeita" seu escopo léxico, mesmo quando é executada fora dele

const soma10 = require('./08-closure_escopo')

const x = 80
console.log(soma10())