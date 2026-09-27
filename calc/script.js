let display = document.getElementById("display");

// Add numbers and operators to display
function addToDisplay(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {

    if (display.value === "") {
        return;
    }

    try {

        let expression = display.value;

        // Check division by zero
        if (expression.includes("/0")) {
            display.value = "Error";
            return;
        }

        let result = eval(expression);

        display.value = result;

    } catch (error) {

        display.value = "Error";

    }
}