const idade = prompt("Qual a sua idade?");
const peso = prompt("Qual o seu peso?");

if (idade <= 12) {
    document.write("Categoria Infantil");
} else if (idade >= 13 && idade <= 16 && peso <= 40) {
    document.write("Categoria Juveil leve");
} else if (idade >= 13 && idade <= 16 && peso > 40) {
    document.write("Categoria Juveil pesado");
} else if (idade >= 17 && idade <= 24 && peso <= 45) {
    document.write("Categoria Sênior leve");
} else if (idade >= 17 && idade <= 24 && peso > 45 && peso <= 60) {
    document.write("Categoria Sênior médio");
} else if (idade >= 17 && idade <= 24 && peso > 60) {
    document.write("Categoria Sênior pesado");
} else if (idade > 24) {
    document.write("Categoria Veterano");
};