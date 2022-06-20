function tabuada(){
    let tabu = document.getElementById('tab')
    let res = document.getElementById('res')
    let num = Number(tabu.value)
    let tabuada = '';

    for (let count=1; count <= 10; count++)
        tabuada += `${num} x ${count} = ${num * count}<br>`

        res.innerHTML = tabuada
}
    