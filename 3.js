function calcularNotas() {
    let valor = document.getElementById("valor").value;
    valor = parseFloat(valor);

    let notas = [100, 50, 10, 5, 1];
    let quantidadeNotas = [0, 0, 0, 0, 0];

    for (let i = 0; i < notas.length; i++) {
      quantidadeNotas[i] = Math.floor(valor / notas[i]);
      valor -= quantidadeNotas[i] * notas[i];
    }

    let resultado = `Valor lido: R$ ${document.getElementById("valor").value}<br>`;
    resultado += `Notas necessárias:<br>`;

    for (let i = 0; i < notas.length; i++) {
      if (quantidadeNotas[i] > 0) {
        resultado += `${quantidadeNotas[i]} nota(s) de R$ ${notas[i]}<br>`;
      }
    }

    document.getElementById("resultado").innerHTML = resultado;
  }