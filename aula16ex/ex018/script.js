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
        valores.push(Number(nadc.value))//Aqui eu adicionei o vetor e pedi para ele "puxar" "o Número que é o valor digitado dentro do nadc".
        let item = document.createElement('option') //aqui eu estou dizendo que quero CRIAR a tag OPTION e vou chama-la aqui dentro do .js de 'item'
        item.text = `Valor ${nadc.value} adicionado.` //aqui estou dizendo qual vari ser o texto dentro da tag OPTION, que aqui no .js está sendo chamada de 'item'.
        lista.appendChild(item)//Aqui eu estou adicionando a tag option na tag section. estou dizendo para "criar filhos" para a tag section, e esses filhos serão options. PRESTE ATENÇÃO: a 'lista' aí é o nome aqui no .js que eu dei para a section, lá no início do documento. o 'item' aí é o nome aqui no .js que eu dei para a option ainda dentro desse if.
        res.innerHTML = ''//COLOQUEI ISSO PARA QUE, ASSIM QUE EU ADICIONAR UM NOVO ITEM, ELE LIMPE O RESULTADO.
    }else{
        window.alert('Valor inválido ou já encontrado na lista.') //Caso o if não dê certo ele vai avisar que tema lgo errado.
    }
    nadc.value = '' //quero deixar a caixa do nadc vazia
    Number.focus() //logo depois eu clicar no adicionar, dando if ou dando else. FICA MAIS INTERATIVO.
}

function finalizar(){
    if (valores.length == 0){ //Se não tiver nenhum item adicionado à lista eu vou mandar essa mensagem de alerta!
        window.alert('Adicione valores à lista antes de finalizar.')
    }else{
        let total = valores.length //Aqui eu pego qual o total de elementos que minha lista tem. E então mando ele mostar no res.innerHTML lá embaixo.
        let maior = valores[0] //se eu só tenho 1 número, ele é o maior
        let menor = valores[0] //se eu só tenho 1 número, ele é o menor
        let soma = 0 // só pra mostrar que ele começa somando com 0.
        let media = 0 // só pra criar mesmo essa variável média.
        for(let pos in valores){ //"PARA CADA POSIÇÃO EM VALORES", ou seja, para cada índice/key/posição dentro da lista/valores, eu vou fazer um teste:
            soma += valores[pos] //o += está dizendo que a variável let 'soma' que começa com 0 vai ir somando todos os valores presentes em todas as posições da lista.
            if(valores[pos] > maior) //se os valores na posição pos for maior valor, do que o maior valor, o maior valor passa a ser os valores[pos]
                maior = valores[pos] //deixa de ser o maior e passa a ser um valores[pos], e vice e versa.
            if(valores[pos] < menor)//Se o valores na posição [pos] for menor do que o menor, o menor passa a ser o valores[pos]
                menor = valores[pos]//deixa de ser o menor e passa a ser um valores[pos], e vice e versa.
        }
        media = soma/total //fórmula para calcular a média.

    //NOTE QUE: Note que a ordem influencia no resultado, por isso estou determinando as variáveis acima e só aqui abaixo estou montando a sequência do que vai aparecer.
        res.innerHTML = '' //Zerar o res, para zerar o valor
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>` //Aqui estou mandando mostrar o total de elementos que tenho dentro da lista, coloquei ali o total que representa o valores.length que é exatamente o total de elementos que tenho na minha lista. LEMBRE-SE: esse += é a concatenação, para que apareça logo depois de zerar o resultado anterior.
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>` //aqui vai informar o maior valor informado, que é representado pelo let 'maior'  
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>` //aqui vai informar o menor valor informado, que é representado pelo let 'menor'
        res.innerHTML += `Somando todos os valores, temos ${soma}.</p>`//só pra mostar a soma mesmo, que foi feita usando tanto a criação da let 'soma' com a estrutura de repetição simplificada e otimizada para variáveis compostas e objetos, chamada 'for in'.
        res.innerHTML += `A média dos valores digitados é ${media}.</p>`//criei a média fora do for, no mesmo esquema da declaração das variáveis. Bastou criar a variável média declarando o 0 nela e depois colocar a variável 'media' igualada com a fórmula para cálculo da média. Isso foi feito também utilizando as demais variáveis criadas para simplificar e otimizar a aplicação, tendo em vista que a variável 'soma' representa a soma de todos os elementos e a variável 'total' representa o total de elementos adicionados.
    }
}


