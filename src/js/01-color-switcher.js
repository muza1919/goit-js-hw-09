const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let interval = null;
// const interval = setInterval(() => {body.style.backgroundColor = getRandomHexColor}, 1000);

startBtn.addEventListener('click', () => {
    onClickStart();
    startBtn.disabled = true;
    stopBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
    onClickStop();
    startBtn.disabled = false;
    stopBtn.disabled = true;
});

function onClickStart (){
    interval = setInterval(() => {body.style.backgroundColor = getRandomHexColor()}, 1000);
}

function onClickStop(){
    clearInterval(interval);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }