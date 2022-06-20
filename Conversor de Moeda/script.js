function conversor () {
    let nomeMoeda = document.getElementById('moeda')
    let valorMoeda = document.getElementById('valor')
    let res = document.getElementById('res')
    let VM = Number(valorMoeda.value)
    let NM = String(nomeMoeda.value).toUpperCase()
    
    if (NM == 'DÓLAR' || NM == 'DOLAR') {
        let novoValor = VM / 5.19
        res.innerHTML = `<br>U$ ${novoValor.toFixed(2)}`
    } else if (NM == 'EURO') {
        let novoValor = VM / 5.46
        res.innerHTML = `<br>€ ${novoValor.toFixed(2)}`
    } else if (NM == 'LIBRA') {
        let novoValor = VM / 6.36
        res.innerHTML = `<br>£ ${novoValor.toFixed(2)}`
    }
}