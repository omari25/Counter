let counting =  document.querySelector('#counting');
let btnOne = document.querySelector('#btn1');
let btnTwo = document.querySelector('#btn2');
let button = document.querySelector('button')

counting.innerHTML = 0

btnOne.onclick = function () {

    counting.innerHTML--

    if (counting.innerHTML < 0) {
        counting.style.color = 'red';
    };

    if (counting.innerHTML == 0) {
        counting.style.color = '#1d1d22';
    }
}

btnTwo.onclick = function () {
    counting.innerHTML++

    if (counting.innerHTML > 0) {
        counting.style.color = 'green';
    }
    if (counting.innerHTML == 0) {
        counting.style.color = '#1d1d22';
    }

} 


counting.style.color = '#1d1d22';


