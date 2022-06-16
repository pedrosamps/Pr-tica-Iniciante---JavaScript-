function AntSuc () {
    var n = document.getElementById('num')
    var res = document.getElementById('res')
    var n1 = Number(n.value)
    var ant = n1 - 1
    var suc = n1 + 1
    res.innerHTML = `<br> Antecessor: ${ant} | Sucessor: ${suc}`
}