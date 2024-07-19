var nadc = document.getElementById('inumero')
var lista = document.getElementById('lista')
var res = document.getElementById('frases')
let valores = []

function isNumero(n){ //Nessa função vamos verificar se o número é válido, ou seja, se ele está entre 1 e 100. Se estiver, ele vai dar verdadeiro e então enviará para a Função ADICIONAR() que o número é válido, vai enviar o número. Agora, se o número não for verdadeiro, então vai retornar false, e não enviará número algum para a função adicionar. O que fará com que a função adicionar não aceite o número (caso dê falso).
    if(Number(n) >= 1 && Number(n) <= 100){ //Precisa ser Number(n). 
        return true
    }else{
        return false
    }
}

function inLista(n, l){ //aqui o 'n' é o número (elemento) que será colocado e o 'l' é a posição em que se encontra esse número. 
    if(l.indexOf(Number(n)) != -1){ //Aqui está pedindo para que se encontre um elemento semelhante ao 'n' na 'l'. Caso encontre, ele passará o número da posição, ou seja, diferente de '-1'. Caso não encontre nenhum valor, ele passará o número '-1'. 
        return true // Portanto se o número encontrado FOR DIFERENTE de '-1', vai dar verdadeiro, portanto, existe aquele número(elemento) na lista. E se existe aquele elemento na lista, então não posso adicionar. MAS COMO DEU VERDADEIRO, EU VOU PASSAR TRUE PARA A FUNÇÃO ADICIONAR. CASO EU PASSE TRUE ELA NÃO VAI ADICIONAR PORQUE COLOCOU UM '!' NA FRENTE.
    }else{
        return false // Caso o número encontrado seja igual a '-1', então dará falso, porque o número NÃO É diferente de '-1', portanto se perguntei se eles são diferentes e na realidade eles são iguais, então é falso. SENDO O NÚMERO IGUAL A '-1' EU PASSAREI FALSO PARA A FUNÇÃO ADICIONAR, E LÁ DARÁ COMO SE FOSSE VERDADEIRO, PORQUE TEM O '!' NA FRENTE.
    } //Dessa forma, fica fácil de entender com os comentários. Se der verdadeiro é porque o número é diferente de -1, portanto já existe um valor semelhante na lista. Se der falso é porque o número é igual a -1, portanto não existe esse número na lista.
}

function adicionar(){ //criei primeiro essa função para adicionar
    if(isNumero(nadc.value) && !inLista(nadc.value, valores)){ //Estou verificando se a função isNumero entregar verdadeiro E se a função inLista entrega um false, então eu posso adicionar o número.
        //LEMBRE-SE: o nadc.value aqui é igual ao n nas funções isNumero() e inLista(), já os valores é igual as listas, no caso da função inLista().
    }else{
        window.alert('Valor inválido ou já encontrado na lista.') //Caso o if não dê certo ele vai avisar que tema lgo errado.
    }
}