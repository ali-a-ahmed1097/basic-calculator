let computation = null;

const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

const previous = document.querySelector('#previous');
const compute = document.querySelector('#compute');
const current = document.querySelector('#current');
const numButtons = document.querySelectorAll('.num button');
const mathsButtons = document.querySelectorAll('.math-symbols button');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
const allClear = document.querySelector('#all-clear');

numButtons.forEach(num => num.addEventListener('click', (e) => current.textContent += e.target.id));

const decimalButton = document.querySelector('#decimal');

decimalButton.addEventListener('click', function () {
    if (!current.textContent.includes('.')) current.textContent += '.';
});

mathsButtons.forEach(symbol => symbol.addEventListener('click', function (e) {
    if (previous.textContent === '' && current.textContent !== '') {
        previous.textContent = current.textContent;
        compute.textContent = e.target.textContent;
        current.textContent = '';

        if (e.target.id === 'add') computation = add;
        else if (e.target.id === 'subtract') computation = subtract;
        else if (e.target.id === 'multiply') computation = multiply;
        else computation = divide;
    }
}));

equals.addEventListener('click', function () {
    if (previous.textContent !== '' && current.textContent !== '') {
        let a = previous.textContent - 0;
        let b = current.textContent - 0;
        previous.textContent = '';
        compute.textContent = '';
        current.textContent = computation(a, b);
    }
});

clear.addEventListener('click', () => current.textContent = current.textContent.slice(0, -1));
allClear.addEventListener('click', () => current.textContent = previous.textContent = compute.textContent = '');