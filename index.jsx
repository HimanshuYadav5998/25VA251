// Temperature Converter Logic

// Convert temperature based on selected units
function convertTemperature() {

    let input = parseFloat(
        document.getElementById("tempInput").value
    );

    let fromUnit =
        document.getElementById("fromUnit").value;

    let toUnit =
        document.getElementById("toUnit").value;

    // Validate input
    if (isNaN(input)) {
        alert("Please enter a valid temperature value.");
        return;
    }

    let result = 0;
    let formula = "";

    // Convert to Celsius first, then to target unit
    let celsius = toCelsius(input, fromUnit);

    result = fromCelsius(celsius, toUnit);

    // Build formula string
    formula = getFormula(fromUnit, toUnit);

    // Display result
    document.getElementById("result").innerHTML =
        result.toFixed(2) + " " + getSymbol(toUnit);

    document.getElementById("formula").innerHTML =
        "Formula: " + formula;
}

// Convert any unit to Celsius
function toCelsius(value, unit) {

    if (unit === "celsius") {
        return value;
    }

    if (unit === "fahrenheit") {
        return (value - 32) * 5 / 9;
    }

    if (unit === "kelvin") {
        return value - 273.15;
    }
}

// Convert Celsius to target unit
function fromCelsius(celsius, unit) {

    if (unit === "celsius") {
        return celsius;
    }

    if (unit === "fahrenheit") {
        return (celsius * 9 / 5) + 32;
    }

    if (unit === "kelvin") {
        return celsius + 273.15;
    }
}

// Return unit symbol
function getSymbol(unit) {

    if (unit === "celsius")    return "°C";
    if (unit === "fahrenheit") return "°F";
    if (unit === "kelvin")     return "K";
}

// Return formula text
function getFormula(from, to) {

    if (from === "celsius" && to === "fahrenheit")
        return "(°C × 9/5) + 32 = °F";

    if (from === "celsius" && to === "kelvin")
        return "°C + 273.15 = K";

    if (from === "fahrenheit" && to === "celsius")
        return "(°F - 32) × 5/9 = °C";

    if (from === "fahrenheit" && to === "kelvin")
        return "(°F - 32) × 5/9 + 273.15 = K";

    if (from === "kelvin" && to === "celsius")
        return "K - 273.15 = °C";

    if (from === "kelvin" && to === "fahrenheit")
        return "(K - 273.15) × 9/5 + 32 = °F";

    return "Same unit — no conversion needed";
}

// Clear all fields
function clearFields() {

    document.getElementById("tempInput").value = "";

    document.getElementById("result").innerHTML = "--";

    document.getElementById("formula").innerHTML = "";
}