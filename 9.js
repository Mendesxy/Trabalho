function calcularPagamento() {
    let preco = document.getElementById("preco").value;
    preco = parseFloat(preco);
    let condicao = document.getElementById("condicao").value;

    let precoFinal;
    switch (condicao) {
      case "a":
        precoFinal = preco * 0.9; // 10% de desconto
        break;
      case "b":
        precoFinal = preco * 0.85; // 15% de desconto
        break;
      case "c":
        precoFinal = preco; // preço normal de etiqueta sem juros
        break;
      case "d":
        precoFinal = preco * 1.1; // preço normal de etiqueta mais juros de 10%
        break;
    }

    let resultado = `Preço Normal de Etiqueta: R$ ${preco.toFixed(2)}<br>`;
    resultado += `Condição de Pagamento: ${getCondicaoName(condicao)}<br>`;
    resultado += `Preço a Pagar: R$ ${precoFinal.toFixed(2)}`;

    document.getElementById("resultado").innerHTML = resultado;
  }

  function getCondicaoName(code) {
    switch (code) {
      case "a":
        return "À vista em dinheiro ou cheque";
      case "b":
        return "À vista no cartão de crédito";
      case "c":
        return "Em duas vezes, preço normal de etiqueta sem juros";
      case "d":
        return "Em duas vezes, preço normal de etiqueta mais juros de 10%";
    }
  }