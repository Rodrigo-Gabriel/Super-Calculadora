const button = document.getElementById('btn');
const button2 = document.getElementById('btn2');
const p = document.getElementById('p');

// codigo para somar dois valores
button.addEventListener('click', () => {
    let valor1 = parseFloat(document.getElementById('valor1').value);
    let valor2 = parseFloat(document.getElementById('valor2').value);

    p.innerHTML = 'O resultado é = ' + Number(valor1 + valor2);
})

button2.addEventListener('click', () => {
    window.location.reload(false);
})
// codigo para somar dois valores

// codigo de teste
const [A, B, C] = [valor1, valor2, valor3];

const calculaTriRet = Number(valor1 * valor2) / 2;
const areaCirculo = 3.14159 * (C ** 2);
const areaTrapezio = (Number(A) + Number(B)) * C / 2;
const areaQuadrado = B ** 2;
const areaRetangulo = A * B;

console.log (`TRIANGULO: ${calculaTriRet.toFixed(3)}`);
console.log (`CIRCULO: ${areaCirculo.toFixed(3)}`);
console.log (`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log (`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log (`RETANGULO: ${areaRetangulo.toFixed(3)}`);