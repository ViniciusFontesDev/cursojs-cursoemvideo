let num = [5, 8, 2, 9, 3]
num.push(7)

console.log(`Nosso vetor é o ${num}`)
console.log(`Temos ${num.length} elementos`)
console.log(`O nosso 5° elemento é ${num[4]}`)

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)
num.sort()
console.log(`Nosso vetor em ordem crescente fica ${num}`)