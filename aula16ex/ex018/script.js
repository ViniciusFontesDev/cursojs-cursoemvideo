function adicionar(){
    var nadc = document.getElementById('inumero')
    var lista = document.getElementById('lista')

    if(nadc.value.length == 0){
        window.alert('Digite um número!')
    }else {
        if(nadc.value < 1 || nadc.value > 100){
            window.alert('Número inválido. Digite apenas números entre 1 e 100')
        }else{
            var n = Number(nadc.value)
            var item = document.createElement('option')
            item.text = `Valor ${n} adicionado.`
            lista.appendChild(item)
        }
    }
}

function finalizar(){
    var res = document.getElementById('frases')
    res.innerHTML += `Ao todo, temos ${} números cadastrados. <br>`
    res.innerHTML += `O maior valor informado foi ${}. <br>`
    res.innerHTML += `O menor valor informado foi ${}. <br>`
    res.innerHTML += `Somando todos os valores, temos ${}. <br>`
    res.innerHTML += `A média dos valores digitados é ${}. <br>`

}