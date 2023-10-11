// Função para calcular o IMC
function calcularIMC(peso, altura) {
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        return "Valores inválidos";
    }

    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

// Função para lidar com o clique no botão de cálculo
function calcular() {
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    const imcValor = document.getElementById('imc-valor');
    const imcClassificacao = document.getElementById('imc-classificacao');

    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    const resultado = calcularIMC(peso, altura);

    if (resultado === "Valores inválidos") {
        imcValor.textContent = "Valores inválidos";
        imcClassificacao.textContent = "";
    } else {
        imcValor.textContent = resultado;
        imcClassificacao.textContent = classificarIMC(parseFloat(resultado));
    }
}

// Função para classificar o IMC
function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 24.9) {
        return "Peso normal";
    } else if (imc < 29.9) {
        return "Sobrepeso";
    } else if (imc < 34.9) {
        return "Obesidade Grau 1";
    } else if (imc < 39.9) {
        return "Obesidade Grau 2";
    } else {
        return "Obesidade Grau 3";
    }
}

// Adicione um ouvinte de evento ao botão de cálculo
document.getElementById('calcular').addEventListener('click', calcular);
