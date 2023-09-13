function funcaoComum(a, b) {

    const valor = Math.pow(a, 2)

    return valor + b
}

function funcaoLazy(a) {

    const valor = Math.pow(a, 2)
    
    return function(b) {
        return valor + b
    }
}

console.time('#1')
console.log(funcaoComum(5, 10))
console.log(funcaoComum(5, 20))
console.log(funcaoComum(5, 30))
console.timeEnd('#1')

console.time('#2')
const funcaoLazy5 = funcaoLazy(5)
console.log(funcaoLazy5(10))
console.log(funcaoLazy5(20))
console.log(funcaoLazy5(30))
console.timeEnd('#2')