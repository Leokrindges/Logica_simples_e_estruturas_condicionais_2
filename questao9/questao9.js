const multa = 5;
let valorMulta;
const velocidade = Number(prompt("Digite a velocida do carro."));

if (velocidade > 80) {
    valorMulta = (velocidade - 80) * multa;
    document.write(`Você passou de 80km/h, por isso vai pagar ${valorMulta} de multa`);
};