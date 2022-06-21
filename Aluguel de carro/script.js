function aluguel (){
    let car = document.getElementById('car')
    let km = document.getElementById('km')
    let totkm = Number(km.value)
    let carro = String(car.value).toUpperCase()
    let res = document.getElementById('res')

    if (carro == 'POPULAR'){
       res.innerHTML = `Valor total: R$ ${90 + (totkm * 0.15)}` 
    } else if (carro == 'LUXO'){
        res.innerHTML = `Valor total: R$ ${120 + (totkm *.30)}`
    } else if (carro == ''){
        window.alert('Preencha os campos em branco!!')
    }
}