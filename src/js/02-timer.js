// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
const input = document.querySelector('#datetime-picker');
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };
const fp = flatpickr(input, options);

const startBtn = document.querySelector('button[data-start]');
const dateDays = document.querySelector('button[data-days]');
const dateHours = document.querySelector('button[data-hours]');
const dateMinutes = document.querySelector('button[data-minutes]');
const dateSeconds = document.querySelector('button[data-seconds]');
// input.textContent
const currentTime = Date.now();
const endTime = options.onClose();
console.log(endTime)

// onChooseDate();

startBtn.addEventListener('click', () => {
    // const ms = endTime - currentTime;
    // console.log(ms);
    // const {daysMs, hoursMs, minutesMs, secondsMs} = convertMs(ms);

    // dateDays.textContent = addLeadingZero(daysMs);
    // dateHours.textContent = addLeadingZero(hoursMs);
    // dateMinutes.textContent = addLeadingZero(minutesMs);
    // dateSeconds.textContent = addLeadingZero(secondsMs);
});



// function onChooseDate(){
//     if (endTime > currentTime){
//         window.alert("Please choose a date in the future");
//         startBtn.disabled = true;
//     }
//     startBtn.disabled = false;
// }

function addLeadingZero(value){
   return value.toString().padStart(2, '0');
}


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}