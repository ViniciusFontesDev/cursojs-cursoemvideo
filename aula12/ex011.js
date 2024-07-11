var idade = 67
if(idade < 16){
    console.log('Não vota')
}else{
    if(idade >= 16 && idade < 18 || idade>=65){
        console.log('Voto opcional')
    }else{
        console.log('Voto obrigatório')
    }
}

//OU

/*var idade = 15
if (idade < 16){
    console.log('Não vota (kid demais)')
}else{
    if(idade >= 16 && idade < 18){
        console.log('voto opcional (jovenzinho)')
    }else{
        if(idade >= 65){
            console.log('VOTO OPCIONAL (adulto)')
        }else{
            console.log('Voto Obrigatório! (velhinho)')
        }
    }
}*/