const numero = Number(prompt("Digite um número para saber se é positivo, negativo ou 0."));

if(numero < 0) {
    document.write(`O número ${numero} é negativo.`);
} else if(numero == 0) {
    document.write(`O número ${numero} é igual a 0.`);
}else {
    document.write(`O número ${numero} é positivo.`);
};