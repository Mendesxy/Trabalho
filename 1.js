function ordenarNumeros() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;
    let num4 = document.getElementById("num4").value;
    let num5 = document.getElementById("num5").value;

    let numeros = [num1, num2, num3, num4, num5].map(Number);

    if (new Set(numeros).size!== 5) {
      alert("Os números devem ser diferentes!");
      return;
    }

    numeros.sort((a, b) => b - a);

    let resultado = "Números em ordem decrescente:<br>";
    numeros.forEach((num) => {
      resultado += `${num}<br>`;
    });

    document.getElementById("resultado").innerHTML = resultado;
  }