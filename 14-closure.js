// A função "respeita" seu escopo léxico, mesmo quando é executada fora dele

const soma10 = require('./13-escopo_closure')

const x = 100
console.log(soma10())