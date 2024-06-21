function calcularSalario() {
    let nivel = document.getElementById("nivel").value;
    let qtdAula = document.getElementById("qtdAula").value;
    qtdAula = parseFloat(qtdAula);

    let valorHoraAula;
    switch (nivel) {
      case "1":
        valorHoraAula = 12.00;
        break;
      case "2":
        valorHoraAula = 17.00;
        break;
      case "3":
        valorHoraAula = 25.00;
        break;
    }

    let salario = valorHoraAula * qtdAula * 4.5;

    let resultado = `Nível do Professor: Nível ${nivel}<br>`;
    resultado += `Quantidade de Horas/Aula por Semana: ${qtdAula}<br>`;
    resultado += `Salário: R$ ${salario.toFixed(2)}`;

    document.getElementById("resultado").innerHTML = resultado;
  }
