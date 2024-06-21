function calcularAumento() {
    let salario = document.getElementById("salario").value;
    if (!salario) {
      alert("Por favor, insira um valor para o salário.");
      return;
    }

    salario = parseFloat(salario);
    let cargo = document.getElementById("cargo").value;

    let percentual;
    switch (cargo) {
      case "101":
        percentual = 0.10;
        break;
      case "102":
        percentual = 0.20;
        break;
      case "103":
        percentual = 0.30;
        break;
      default:
        percentual = 0.40;
    }

    let aumento = salario * percentual;
    let novoSalario = salario + aumento;

    let resultado = `Salário Atual: R$ ${salario.toFixed(2)}<br>`;
    resultado += `Cargo: ${getCargoName(cargo)}<br>`;
    resultado += `Aumento: R$ ${aumento.toFixed(2)} (${(percentual * 100).toFixed(0)}%)<br>`;
    resultado += `Novo Salário: R$ ${novoSalario.toFixed(2)}<br>`;
    resultado += `Diferença: R$ ${aumento.toFixed(2)}`;

    document.getElementById("resultado").innerHTML = resultado;
  }

  function getCargoName(cargoCode) {
    switch (cargoCode) {
      case "101":
        return "Gerente";
      case "102":
        return "Engenheiro";
      case "103":
        return "Técnico";
      default:
        return "Outro";
    }
  }