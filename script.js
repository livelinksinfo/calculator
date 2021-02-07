const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const btnEqual = document.querySelector('.btn-equal');
const btnClear = document.querySelector('.btn-clear');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        let number = btns[i].getAttribute('data-num');
        console.log(number)
        screen.value += number;
    })
}

btnEqual.addEventListener('click', function() {
    if (screen.value === '') {
        alert('Input a valid expression');
    } else {
        let values = eval(screen.value);
        screen.value = values;
    }
})

btnClear.addEventListener('click', function() {
    screen.value = '';
})