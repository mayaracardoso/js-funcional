const x = 10;

function executaFora() {
  function somar() {
    return x + 10;
  }
  return somar;
}

module.exports = executaFora();
