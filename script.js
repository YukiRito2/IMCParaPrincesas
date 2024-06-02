function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value) / 100; // Convert to meters

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    const imc = peso / (altura * altura);
    let resultado = '';

    if (imc < 18.5) {
        resultado = 'Anorexica';
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado = 'Flaca';
    } else if (imc >= 25 && imc < 29.9) {
        resultado = 'Sobrepeso';
    } else if (imc >= 30) {
        resultado = 'Gorda';
    }

    document.getElementById('imc').value = `${imc.toFixed(2)} - ${resultado}`;
}

function resetIMC() {
    document.getElementById('imc').value = '';
}
