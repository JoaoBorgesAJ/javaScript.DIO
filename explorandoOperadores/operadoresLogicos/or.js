// Operador condicional em que uma opção e verdadeira
// OR ( || ) - nosso boneco so pode sair se estiver sem chuva OU com guarda chuva

let tempo = "sol"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log("Nosso personagem pode sair ? " + podeSair)

tempo = "chuva"
item = "guarda chuva"
podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log("Nosso personagem pode sair ? " + podeSair)

tempo = "chuva"
item = "espada"
podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log("Nosso personagem pode sair ? " + podeSair)