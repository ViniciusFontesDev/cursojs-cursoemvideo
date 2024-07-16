function contar(){
    var i = window.document.getElementById('inicio')
    var f = window.document.getElementById('fim')
    var p = window.document.getElementById('passo')
    var res = window.document.getElementById('res')

    var i = Number(i.value)
    var f = Number(f.value)
    var p = Number(p.value)

    for (var c = i; c <= f; c = i + p){
        console.log(`${c}; `)
    }
    res.innerHTML = `é o ${c};`
}