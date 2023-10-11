let saldoEmConta = 1000;
const taxa = 4.50;

let saque = Number(prompt("Digite o valor que deseja retirar. Taxa de saque: R$ 4,50."));

if (saque + taxa > saldoEmConta) {
    document.write(`Saldo Insuficinte!!! Você tem R$ ${saldoEmConta} em conta.`);
} else if (saque % 5 != 0 || saque <= 0) {
    document.write(`Caixa só possui notas de R$ 5,00! <br> Saque não pode ser igual ou menor que 0.`);
} else {
    saldoEmConta = saldoEmConta - taxa - saque;
    document.write(`Saque realizado com sucesso!! Você ainda tem ${saldoEmConta} disponível!`);
};