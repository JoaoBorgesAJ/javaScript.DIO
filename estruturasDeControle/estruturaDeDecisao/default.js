/*Default (padrão): O "default" é opcional e é usado quando nenhum dos casos correspondentes 
é encontrado. Funciona como o "else" em um bloco "if-else". Se nenhum dos casos corresponder 
ao valor da expressão, o bloco de código associado ao "default" será executado. */

let fruta = "uva"
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
    default:
        console.log("Fruta " + fruta +  " não encontrada! ")
        break
}