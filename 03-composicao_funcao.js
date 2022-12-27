function composicao(...fns) {
    return function(valor) {
        return fns.reduce((acc, fn) => {
            return fn(acc)
        }, valor)
    }
}

function converteMaiusculo(texto) {
    return texto.toUpperCase()
}

function insereEspacos(texto) {
    return texto.split('').join(' ')
}

const stringFinal = composicao(
    converteMaiusculo,
    insereEspacos
)

console.log(stringFinal('programação funcional com javascript'))
