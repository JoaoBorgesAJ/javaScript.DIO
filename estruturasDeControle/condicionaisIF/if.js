/* IF é usada para executar um bloco de código se uma condição específica para verdadeira.
Se a condição não for verdadeira, o bloco de código dentro do "if" não será executado.*/
let ligado = false
if (ligado) {
    console.log("executou comando")
}

ligado = false
if (1 === 1) {
    console.log("executou comando")
}

ligado = true
if (ligado) {
    console.log("executou comando")
}

let possuiOvos = false
let itensComprados = ""
if (possuiOvos) {
    itensComprados = "leite"
}

console.log("item comprado: " + itensComprados)

possuiOvos = true
itensComprados = ""
if (possuiOvos) {
    itensComprados = "leite"
}

console.log("item comprado: " + itensComprados)