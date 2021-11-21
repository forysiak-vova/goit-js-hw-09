import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[ data-start]');
startBtn.setAttribute('disabled', true);
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
 onClose(selectedDates) {
   //   console.log(selectedDates[0]);
    
     if (selectedDates[0] < Date.now()) {
       Notiflix.Notify.failure("Please choose a date in the future")
         startBtn.setAttribute('disabled', true);
        return;
   } startBtn.removeAttribute('disabled');
   
    startBtn.addEventListener('click', () => {
      function counts() {
   let now = new Date();
       const dataTime = selectedDates[0] - now;
      let time = convertMs(dataTime);
      
      if (dataTime < 0) {
        return;
       }
       document.querySelector('[data-days]').innerText = time.days;
       document.querySelector('[data-hours]').innerText = time.hours;
       document.querySelector('[data-minutes]').innerText = time.minutes;
       document.querySelector('[data-seconds]').innerText = time.seconds;
   };
        setInterval(counts, 1000);
       startBtn.setAttribute('disabled', true);
      input.setAttribute('disabled', true);
    });
  },
};


flatpickr("input[type=text]", options);


// ==================== функція додає знаки до значення ==================================================================
function addLeadingZero(value) {
   return String(value).padStart(2, '0');
};
// ========================================================================================================================

// =================== функція для виоду часу =============================================================================
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
// ========================================================================================================================


// ====================================== таймер вперед ====================================
// const isActive = false;
// const timer = {
   
//    start() {
     
//       const startTime = Date.now();
//       // console.log(startTime);
//       setInterval(() => {
//          const currentTime = Date.now();
//          const dataTime = currentTime - startTime;
//          const time = convertMs(dataTime);
//          // console.log(`${days}:${hours}:${minutes}:${seconds}`);
//          // const resOfTime = (`${days}:${hours}:${minutes}:${seconds}`)
//          updateInputFace(time);

     
         
//       },1000);
//    }
   
// };

// startBtn.addEventListener('click', () => {
//    //  if (isActive) {
//    //       return
//    // }
//     startBtn.setAttribute("disabled", false)
//    timer.start();

// });

// function updateInputFace({days,hours,minutes,seconds}) {
//    docQuer.value = `${days}:${hours}:${minutes}:${seconds}`;
// };
// =======================================================================================================================