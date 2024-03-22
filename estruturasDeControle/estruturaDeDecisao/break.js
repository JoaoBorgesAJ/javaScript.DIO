/*Break (quebra): O "break" é usado para sair do bloco "switch" depois que um "case" correspondente 
é encontrado e executado. Isso impede que a execução continue nos casos subsequentes. Sem o "break", 
a execução continuaria nos casos seguintes até encontrar um "break" ou chegar ao final do bloco "switch".*/ 

let fruta = "banana"
switch (fruta) {
    case "laranja":
        console.log("Suco de laranja")
        break

    case "banana":
        console.log("vitamina de banana")
        break

    case "maça":
        console.log("suco de maça")
        break
}