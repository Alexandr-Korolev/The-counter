// элементы
let year = document.querySelector('#year');
let days = document.querySelector('#days');
let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');

let countdown = document.querySelector('#countdown');
let preloader = document.querySelector('#preloader');


// текущий год
let currentYear = new Date().getFullYear();

// следующий год
let nextYear = new Date(`January 01 2023 00:00:00`);

// устанавливаем год на странице
year.innerText = currentYear + 1;



// функция сама делает отсчет
function update() {

    // текущее время (в милисекундах)
    let currentTime = new Date();


    // разница между следущим годом и текущим временем ( в милисекундах )
    let diff = nextYear - currentTime;


    // получаем дни (ровное число)
    let daysLeft =  Math.floor(diff / 1000 / 60 / 60 / 24);
    
    // получаем часы ----- без учета полных дней (т.е. остаток от прошлого остатка)
    let hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;

    // оплучаем минкты (остаток)
    let minLeft = Math.floor(diff/ 1000 / 60) % 60;

    // получаем секунду (остаток)
    let secondsLeft = Math.floor(diff / 1000) % 60;



    // выводим на страницу значения
    // условие,на случай если цифра окажется одна
    days.innerText = daysLeft < 10 ? '0' + daysLeft: daysLeft;
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerText = minLeft < 10 ? '0' + minLeft: minLeft;
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft: secondsLeft;

}

// // ятобы не было изначально нулей, можем сразу вызвать функцию
// update();
// но, мы ставим прилоудер на момент загрузки данных


// делаем таймер
setInterval(update, 1000);

// сначала загружаем прелоудер а через секунду удалим и покажем таймер
setTimeout(function(){

    preloader.remove();
    countdown.style.display = 'flex';

},1000);