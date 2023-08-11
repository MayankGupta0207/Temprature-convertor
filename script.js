function convertToCelsius() {
    const fahrenheitInput = document.getElementById('fahrenheit');
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitValue = parseFloat(fahrenheitInput.value);

    if (!isNaN(fahrenheitValue)) {
        const celsiusValue = (fahrenheitValue - 32) * (5 / 9);
        celsiusInput.value = celsiusValue.toFixed(2);
        document.getElementById('error-message').style.display = 'none';
    } else {
        document.getElementById('error-message').textContent = 'Please enter a valid Fahrenheit temperature.';
        document.getElementById('error-message').style.display = 'block';
    }
}

function convertToFahrenheit() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const celsiusValue = parseFloat(celsiusInput.value);

    if (!isNaN(celsiusValue)) {
        const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
        document.getElementById('error-message').style.display = 'none';
    } else {
        document.getElementById('error-message').textContent = 'Please enter a valid Celsius temperature.';
        document.getElementById('error-message').style.display = 'block';
    }
}
