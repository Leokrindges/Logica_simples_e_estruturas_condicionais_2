const diaSemana = Number(prompt("Digite o número do dia da semana (1 á 7)."));

switch (diaSemana) {
    case 1:
        document.write("Segunda-feira");
        break;
    case 2:
        document.write("Terça-feira");
        break;
    case 3:
        document.write("Quarta-feira");
        break;
    case 4:
        document.write("Quinta-feira");
        break;
    case 5:
        document.write("Sexta-feira");
        break;
    case 6:
        document.write("Sabado");
        break;
    case 7: 5
        document.write("Domingo");
        break;
    default:
        document.write("Digite um número de 1 á 7");
        break;
};