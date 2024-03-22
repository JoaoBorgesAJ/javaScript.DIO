/*Switch (comutador): O "switch" é o bloco de código que contém várias opções de casos.
Ele avalia uma expressão e, com base no valor dessa expressão, direciona o fluxo de execução 
para um dos casos correspondentes.
__________________________________________________________________________________________________
Case (caso): Dentro do bloco "switch", você tem vários "case". 
Cada "case" é uma opção que o valor da expressão pode assumir. 
Se o valor da expressão corresponder ao valor especificado em um "case", 
o bloco de código associado a esse "case" será executado.*/

let fruta = "banana"
switch (fruta) {
    case "laranja":
        console.log("Suco de laranja")

    case "banana":
        console.log("vitamina de banana")

    case "maça":
        console.log("suco de maça")
}