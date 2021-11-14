const startbtn = document.querySelector('[data-start]');
const stoptbtn = document.querySelector('[data-stop]');
const bodyCol = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};



startbtn.addEventListener('click', onClickBtnStart);
stoptbtn.addEventListener('click', onClickBtnStop);

let timeoutId = null;
const NOTIFICATION_DELAY = 1000;

function onClickBtnStart() {
   const color = `${getRandomHexColor()}`;
   bodyCol.style.backgroundColor = color;
 
//   timeoutId = setTimeout(onClickBtnStart, NOTIFICATION_DELAY);
   timeoutId = setTimeout(() => {
      onClickBtnStart()
      console.log(timeoutId);
     
   },NOTIFICATION_DELAY);
};
 
function onClickBtnStop() {

    clearTimeout(timeoutId);
};





