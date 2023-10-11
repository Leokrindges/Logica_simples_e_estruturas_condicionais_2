const temperaturaCelsius = Number(prompt("Digite a temperatura em gruas Celsius"));

let converteParaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;

document.write(`${temperaturaCelsius}°C convertido para Fahrenheit é: ${converteParaFahrenheit}°F`);