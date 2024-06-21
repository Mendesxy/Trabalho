function calcularValor() {
    let codigo = document.getElementById("codigo").value;
    let quantidade = document.getElementById("quantidade").value;
    quantidade = parseInt(quantidade);

    let preco;
    switch (codigo) {
      case "1":
        preco = 11.00;
        break;
      case "2":
        preco = 8.50;
        break;
      case "3":
        preco = 8.00;
        break;
      case "4":
        preco = 9.00;
        break;
      case "5":
        preco = 10.00;
        break;
      case "6":
        preco = 4.50;
        break;
    }

    let valorTotal = preco * quantidade;

    let resultado = `Item: ${getItemName(codigo)}<br>`;
    resultado += `Quantidade: ${quantidade}<br>`;
    resultado += `Valor Total: R$ ${valorTotal.toFixed(2)}`;

    document.getElementById("resultado").innerHTML = resultado;
  }

  function getItemName(code) {
    switch (code) {
      case "1":
        return "Cachorro Quente";
      case "2":
        return "Bauru";
      case "3":
        return "Misto Quente";
      case "4":
        return "Hamburguer";
      case "5":
        return "Cheeseburguer";
      case "6":
        return "Refrigerante";
    }
  }