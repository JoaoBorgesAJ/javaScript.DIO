// Relacionais Verdadeiros ou Falso

// = Atribuição 
// == Comparação de valores
// === Compara o valor e o formato do conteudo são iguais
let numero = "1"
console.log(numero === "1")

// !== Verifica se e diferente
let marca = "Apple"
let resultado = marca !== "Samsung"
console.log(resultado)

// Guardar o valor em uma variavel de resultado
let cpfBloqueado = "123.445.222-45"
let cpfUsuario = "222.111.222.-09"
let cadastroPosito = cpfBloqueado === cpfUsuario

console.log("O usuario está restrito? " + cadastroPosito)