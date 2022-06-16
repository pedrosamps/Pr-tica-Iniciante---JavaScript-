function confirmar() {
    var msg = document.getElementById('frase')
    var res = document.getElementById('res')
    var frase = String(msg.value)
    res.innerHTML = `<br>${frase}`
    
}