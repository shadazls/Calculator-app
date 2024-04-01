document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('#calculator-buttons button');
    const screen = document.getElementById('calculator-screen');
    let screenValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.getAttribute('data-value');
            const action = button.getAttribute('data-action');

            if (value) {
                addToScreen(value);
            } else if (action === 'clear') {
                clearScreen();
            } else if (action === 'reset') {
                resetScreen();
            } else if (action === 'calculate') {
                calculate();
            } else if (action === '+' || action === '-' || action === '/' || action === '*') {
                addOperator(action);
            }
        });
    });

    function addToScreen(value) {
        screenValue += value;
        updateScreen();
    }

    function clearScreen() {
        while (screenValue.slice(-1) === ' ') {
            screenValue = screenValue.slice(0, -1);
        }
        screenValue = screenValue.slice(0, screenValue.lastIndexOf(' ') || screenValue.length);
        updateScreen();
    }

    function resetScreen() {
        screenValue = '';
        screen.innerText = '';
    }

    function addOperator(operator) {
        screenValue += ' ' + operator + ' ';
        updateScreen();
    }

    function calculate() {
        try {
            const result = eval(screenValue);
            screenValue = result.toString();
            updateScreen();
        } catch (error) {
            console.error('Error in calculation:', error);
        }
    }

    function updateScreen() {
        screen.innerText = screenValue;
    }
});
