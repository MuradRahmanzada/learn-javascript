const buttonEl = document.getElementsByTagName('button');
const inputEl = document.getElementById('input');
const calculateEl = document.getElementById('calculate');
const clearEl = document.getElementById('clear');

for(let i = 0; i <16; i++) {
    if(i !=12 && i !=14){
        buttonEl[i].addEventListener('click', printFunc);
    }
}

function printFunc() {
    inputEl.value = input.value + this.value
}

calculateEl.addEventListener('click', calculate);

function calculate() {
    inputEl.value = eval(inputEl.value)
}

clearEl.addEventListener('click', clear);

function clear() {
    input.value = ""
}