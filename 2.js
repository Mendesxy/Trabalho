document.getElementById("triangleForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let X = parseFloat(document.getElementById("ladoX").value);
    let Y = parseFloat(document.getElementById("ladoY").value);
    let Z = parseFloat(document.getElementById("ladoZ").value);
    
    let resultado = verificarTriangulo(X, Y, Z);
    document.getElementById("resultado").textContent = resultado;
});

function verificarTriangulo(X, Y, Z) {
    if ((X + Y > Z) && (X + Z > Y) && (Y + Z > X)) {
        if (X === Y && Y === Z) {
            return "Triângulo Equilátero";
        } else if (X === Y || X === Z || Y === Z) {
            return "Triângulo Isósceles";
        } else {
            return "Triângulo Escaleno";
        }
    } else {
        return "Não forma um triângulo";
    }
}