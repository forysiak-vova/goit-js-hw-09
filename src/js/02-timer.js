import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

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
        window.alert("Please choose a date in the future")
         startBtn.setAttribute('disabled', true);
        return;
    } startBtn.removeAttribute('disabled');
    function counts() {
   let now = new Date();
       const dataTime = selectedDates[0] - now;
       
       const time = convertMs(dataTime);
      //  console.log(time);
      //  console.log(time.days);
       document.querySelector('[data-days]').innerText = time.days;
       document.querySelector('[data-hours]').innerText = time.hours;
       document.querySelector('[data-minutes]').innerText = time.minutes;
       document.querySelector('[data-seconds]').innerText = time.seconds;
    }
    counts();
    startBtn.addEventListener('click', () => {
       setInterval(counts, 1000);
       startBtn.setAttribute('disabled', true);
       input.setAttribute('disabled', true);
    });
  },
};


flatpickr("input[type=text]", options);

const docQuer = document.querySelector('#datetime-picker');





// console.log(docQuer.value);
// const res = docQuer.textContent
// const docQuer = document.createElements();


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