function gerarTabuada(){
    var n = window.document.getElementById('numero')
    var t = window.document.getElementById('itabuada')

    if(n.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else {
        var n = Number(n.value)
        var c = 1
        t.innerHTML = ''
        while (c <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `t${c}`
            t.appendChild(item)
            c++
        }
    }
}