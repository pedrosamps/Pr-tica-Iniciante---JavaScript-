function somador (){
    var ts1 = document.getElementById('s1')
    var ts2 = document.getElementById('s2')
    var res = document.getElementById('res')
    var n1 = Number(ts1.value)
    var n2 = Number(ts2.value)


    res.innerHTML = `<br>${n1} + ${n2} = ${n1+n2}`
}