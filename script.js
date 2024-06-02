function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value) / 100; // Convert to meters

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    const imc = peso / (altura * altura);
    document.getElementById('imc').value = imc.toFixed(2);

    let mensaje = '';

    if (imc < 18.5) {
        mensaje = 'Bajo peso';
    } else if (imc >= 18.5 && imc < 23) {
        mensaje = 'Peso normal';
    } else if (imc >= 23 && imc < 25) {
        mensaje = 'Y así te haces llamar "princesa" gorda.';
    } else if (imc >= 25 && imc < 30) {
        mensaje = 'Obesidad leve';
    } else if (imc >= 30 && imc < 35) {
        mensaje = 'Obesidad moderada';
    } else if (imc >= 35) {
        mensaje = 'Obesidad severa';
    }

    document.getElementById('resultado').innerText = mensaje;
}

function resetIMC() {
    document.getElementById('imc').value = '';
    document.getElementById('resultado').innerText = '';
}
