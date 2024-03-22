// AND (&&)
// Verifica se todos os campos atendem aos requisitos 
let idade = 18
let vistoVerificado = true
let resultato = (idade >= 18) && (vistoVerificado === true)
console.log(resultato)

idade = 17
vistoVerificado = true
resultato = (idade >= 18) && (vistoVerificado === true)
console.log(resultato)

idade = 18
vistoVerificado = false
resultato = (idade >= 18) && (vistoVerificado === true)
console.log(resultato)

// AND (&&) - 100 moedas coletadas e 1 item estrela
let moedasColetas = 100
let item = "estrela"
resultato = (moedasColetas >= 100) && (item === "estrela")
console.log(resultato)

moedasColetas = 99
item = "estrela"
resultato = (moedasColetas >= 100) && (item === "estrela")
console.log(resultato)

moedasColetas = 110
item = "estrela"
resultato = (moedasColetas >= 100) && (item === "Estrela")
console.log(resultato)