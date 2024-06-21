function calcularCredito() {
    let saldoMedio = document.getElementById("saldoMedio").value;
    saldoMedio = parseFloat(saldoMedio);

    let percentual;
    if (saldoMedio <= 200) {
      percentual = 0;
    } else if (saldoMedio <= 400) {
      percentual = 0.20;
    } else if (saldoMedio <= 600) {
      percentual = 0.30;
    } else {
      percentual = 0.40;
    }

    let credito;
    if (percentual === 0) {
      credito = "Nenhum Crédito";
    } else {
      credito = `R$ ${saldoMedio * percentual}`;
    }

    let resultado = `Saldo Médio no Último Ano: R$ ${saldoMedio.toFixed(2)}<br>`;
    resultado += `Valor do Crédito: ${credito}`;

    document.getElementById("resultado").innerHTML = resultado;
  }