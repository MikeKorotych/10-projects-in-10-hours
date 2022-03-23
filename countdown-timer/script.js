
const DR  = '3 Mar 2023';

const dayEl = document.getElementById('day');
const hourEl = document.getElementById('hour');
const minEl = document.getElementById('min');
const secondEl = document.getElementById('second');

function countdownB() {
    const birthDate = new Date(DR);
    const currentDate = new Date();

    const totalSeconds = (birthDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    dayEl.innerHTML = days;
    hourEl.innerHTML = hours;
    minEl.innerHTML = mins;
    secondEl.innerHTML = seconds;
}

countdownB();
setInterval(countdownB, 1000);


const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = "1 Jan 2023";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

//initial call
countdown();

setInterval(countdown, 1000);
