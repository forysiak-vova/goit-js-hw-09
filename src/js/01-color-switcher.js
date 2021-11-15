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
const isActiv = false;

function onClickBtnStart() {
   const color = `${getRandomHexColor()}`;
   bodyCol.style.backgroundColor = color;
   // startbtn.setAttribute("disabled", true)
   // if ('click') {
   //     startbtn.setAttribute("disabled", false)
   // }
   // if ( startbtn.setAttribute("disabled", true)) {
   //   stoptbtn.setAttribute("disabled", false);
   // } else if (startbtn.setAttribute("disabled", false)) {
   //  stoptbtn.setAttribute("disabled", true);
   //  }
  
//   timeoutId = setTimeout(onClickBtnStart, NOTIFICATION_DELAY);
   timeoutId = setTimeout(() => {
    onClickBtnStart()
      // startbtn.setAttribute("disabled", true);
      //  stoptbtn.setAttribute("disabled", false);
      console.log(timeoutId);
    
   },NOTIFICATION_DELAY);
};
 
function onClickBtnStop() {
   // if (onClickBtnStop) {
   //    stoptbtn.setAttribute("disabled", true);
   // };
   // stoptbtn.setAttribute("disabled", false);
   // startbtn.setAttribute("disabled", false);
   stoptbtn.setAttribute("disabled", false)
    clearTimeout(timeoutId);
};





