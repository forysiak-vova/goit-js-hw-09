// const data = new Date().getTime();
// console.log(data);

// setTimeout(() => {
//    console.log(data);
//    const date = new Date();
//    console.log(date);
// }, 3000);
const docQuer = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[ data-start]');


console.log(docQuer.value);
// const res = docQuer.textContent
// const docQuer = document.createElements();
const isActive = false;
const timer = {
   
   start() {
     
      const startTime = Date.now();
      // console.log(startTime);
      setInterval(() => {
         const currentTime = Date.now();
         const dataTime = currentTime - startTime;
         const time = convertMs(dataTime);
         // console.log(`${days}:${hours}:${minutes}:${seconds}`);
         // const resOfTime = (`${days}:${hours}:${minutes}:${seconds}`)
         updateInputFace(time);

     
         
      },1000);
   }
   
};

startBtn.addEventListener('click', () => {
   //  if (isActive) {
   //       return
   // }
    startBtn.setAttribute("disabled", false)
   timer.start();

});

function updateInputFace({days,hours,minutes,seconds}) {
   docQuer.value = `${days}:${hours}:${minutes}:${seconds}`;
};

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