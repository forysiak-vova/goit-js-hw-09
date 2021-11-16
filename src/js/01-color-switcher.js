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
   
   startbtn.setAttribute('disabled', true);
     stoptbtn.removeAttribute("disabled");
  
   
   timeoutId = setInterval(() => {
     
       const color = `${getRandomHexColor()}`;
       bodyCol.style.backgroundColor = color;
     
    
   },NOTIFICATION_DELAY);
};
 
function onClickBtnStop() {
   startbtn.removeAttribute('disabled');
   stoptbtn.setAttribute("disabled", true);
    
   clearInterval(timeoutId);
   
};
















