const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const btnEqual = document.querySelector('.btn-equal');
const btnClear = document.querySelector('.btn-clear');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        let number = btns[i].getAttribute('data-num');
        screen.value += number;
    })
}

btnEqual.addEventListener('click', function() {
    let values = eval(screen.value);
    screen.value = values;
})

btnClear.addEventListener('click', function() {
    screen.value = '';
})