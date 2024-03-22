
let fruta = "uva"
switch (fruta) {
    
    case "laranja":
        console.log("Suco");
        break;

    case "banana":
    case "morango":
        console.log("Vitamina");
        break;

    default: (fruta + "Não encontrada! ")
        break;
}