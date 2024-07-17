function contar(){
    var i = window.document.getElementById('inicio')
    var f = window.document.getElementById('fim')
    var p = window.document.getElementById('passo')
    var res = window.document.getElementById('res')
    
    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] Faltam dados!')
    } else{
        innerHTML = 'Contando...'
        var i = Number(i.value)
        var f = Number(f.value)
        var p = Number(p.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando como PASSO 1...')
            p = 1
        }
        if (i < f){
            //Contagem crescente
            for (var c = i; c <= f; c += p){
                res.innerHTML += `${c}; \u{1F449}`
            }
        }else {
            //Contagem regressiva
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c}; \u{1F449}`
            }
        }
        res.innerHTML += '\u{1F3C1}'
    }
}