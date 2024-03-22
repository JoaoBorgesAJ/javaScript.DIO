/* A instrução "else" é usada em conjunto com "if" para executar um bloco de código.
Se a condição especificada no "if" for falsa*/
let possuiOvos = false
let itensComprados = ""
if (possuiOvos) {
    itensComprados = "leite"
} else {
    console.log("passou na sessão de congelados")
    itensComprados = "Lasanha congelada"
}

console.log("item comprado: " + itensComprados)

possuiOvos = true
itensComprados = ""
if (possuiOvos) {
    itensComprados = "leite"
} else {
    console.log("passou na sessão de congelados")
    itensComprados = "Lasanha congelada"
}

console.log("item comprado: " + itensComprados)