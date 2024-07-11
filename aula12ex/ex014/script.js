function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 5 && hora <= 12){
        //BOM DIA
        img.src = 'imagem/dia.jpg'
        document.body.style.background = '#0066ff77'
    }else if (hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'imagem/tarde.jpg'
        document.body.style.background = '#e59f1d'
    }else{
        //BOA NOITE
        img.src = 'imagem/noite.jpg'
        document.body.style.background = '#000000ce'
    }
}
