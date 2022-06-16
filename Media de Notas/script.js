function media () {
    var tn1 = document.getElementById('n1')
    var tn2 = document.getElementById('n2')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var med = Number((n1 + n2) / 2)


    if (med >= 7) {
        res.innerHTML = `<br>Sua média foi ${med}. <br>APROVADO!`
    } else if (med >= 5 && med <= 6.9){
        res.innerHTML = `<br>Sua média foi ${med}. <br>RECUPERAÇÃO!`
    } else {
        res.innerHTML = `<br>Sua média foi ${med}. <br>REPROVADO`
    }
}