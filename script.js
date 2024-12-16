const textBox = document.getElementById("textBox");
const fromFahrenheit = document.getElementById("fromFahrenheit");
const fromCelsius = document.getElementById("fromCelsius");
const fromKelvin = document.getElementById("fromKelvin");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const toKelvin = document.getElementById("toKelvin");
const convertBtn = document.getElementById("convertBtn");
const output = document.getElementById("output");

convertBtn.onclick = function(){
    let numInput = Number(textBox.value);

    let numOutput = "Invalid Conversion";

    if (fromFahrenheit.checked && toFahrenheit.checked) {
        numOutput = numInput;
    }
    else if (fromFahrenheit.checked && toCelsius.checked) {
        numOutput = ((numInput - 32) * 5) / 9;
    }
    else if (fromFahrenheit.checked && toKelvin.checked) {
        numOutput = ((numInput - 32) * 5) / 9 + 273.15;
    }
    else if (fromCelsius.checked && toCelsius.checked) {
        numOutput = numInput;
    }
    else if (fromCelsius.checked && toFahrenheit.checked) {
        numOutput = (numInput * 9) / 5 + 32;
    }
    else if (fromCelsius.checked && toKelvin.checked) {
        numOutput = numInput + 273.15;
    }
    else if (fromKelvin.checked && toKelvin.checked) {
        numOutput = numInput;
    }
    else if (fromKelvin.checked && toFahrenheit.checked) {
        numOutput = ((numInput - 273.15) * 9) / 5 + 32;
    }
    else if (fromKelvin.checked && toCelsius.checked) {
        numOutput = numInput - 273.15;
    }

    output.textContent = `Converted Value: ${numOutput}`;
    console.log(`${numInput} = ${numOutput}`)
};
