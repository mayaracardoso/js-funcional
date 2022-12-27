const x = 20

function executaFora() {

    function somar() {
        return x + 10
    }
    return somar
}

module.exports = executaFora()