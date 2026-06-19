function convertTemperature() {

    const temp = parseFloat(
        document.getElementById("temperature").value
    );

    const unit = document.getElementById("unit").value;

    const result = document.getElementById("result");

    if (isNaN(temp)) {
        result.innerHTML =
            "⚠ Please enter a valid number.";
        return;
    }

    let output = "";

    if (unit === "celsius") {

        const fahrenheit = (temp * 9 / 5) + 32;
        const kelvin = temp + 273.15;

        output = `
            <strong>${temp.toFixed(2)} °C</strong><br>
            ${fahrenheit.toFixed(2)} °F<br>
            ${kelvin.toFixed(2)} K
        `;

    } else if (unit === "fahrenheit") {

        const celsius = (temp - 32) * 5 / 9;
        const kelvin = celsius + 273.15;

        output = `
            ${celsius.toFixed(2)} °C<br>
            <strong>${temp.toFixed(2)} °F</strong><br>
            ${kelvin.toFixed(2)} K
        `;

    } else {

        const celsius = temp - 273.15;
        const fahrenheit = (celsius * 9 / 5) + 32;

        output = `
            ${celsius.toFixed(2)} °C<br>
            ${fahrenheit.toFixed(2)} °F<br>
            <strong>${temp.toFixed(2)} K</strong>
        `;
    }

    result.innerHTML = output;
}

console.log("Temperature Converter Loaded Successfully");