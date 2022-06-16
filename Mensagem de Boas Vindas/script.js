function confirmar () {
    var msg = document.getElementById('nome')
    var res = document.getElementById('res')
    var nome = String(msg.value)

    res.innerHTML = `<br>Seja bem-vindo ao nosso portal, ${nome}!`
}