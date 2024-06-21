function calcularPesoIdeal() {
    let altura = document.getElementById("altura").value;
    altura = parseFloat(altura);
    let sexo = document.getElementById("sexo").value;

    let pesoIdeal;
    if (sexo === "masculino") {
      pesoIdeal = (72.7 * altura) - 58;
    } else {
      pesoIdeal = (62.1 * altura) - 44.7;
    }

    let resultado = `Altura: ${altura} metros<br>`;
    resultado += `Sexo: ${sexo}<br>`;
    resultado += `Peso Ideal: ${pesoIdeal.toFixed(2)} kg`;

    document.getElementById("resultado").innerHTML = resultado;
  }