const custoDeFAbrica = Number(prompt("Digite o custo de fabrica do carro"));

const percentualDistribuidor = (custoDeFAbrica * 28) / 100;
const percentualImposto = (custoDeFAbrica * 45) /100;

const custoTotal = custoDeFAbrica + percentualDistribuidor + percentualImposto;

document.write(`O custo do total foi de ${custoTotal}`);