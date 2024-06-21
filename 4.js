function calcularImposto() {
    let ano = document.getElementById("ano").value;
    let valor = document.getElementById("valor").value;
    valor = parseFloat(valor);

    let taxa;
    if (ano < 1990) {
      taxa = 0.01;
    } else {
      taxa = 0.015;
    }

    let imposto = valor * taxa;

    let resultado = `Ano de Fabricação: ${ano}<br>`;
    resultado += `Valor de Tabela do Carro: R$ ${valor.toFixed(2)}<br>`;
    resultado += `Imposto a ser pago: R$ ${imposto.toFixed(2)}`;

    document.getElementById("resultado").innerHTML = resultado;
  }