const form = document.querySelector('.form');


form.addEventListener('submit', onSubmitForm);
function onSubmitForm(e) {
e.preventDefault();
   const formData = new FormData(form);
  
  
   const user = {};
   formData.forEach((value, name) => {
      
       user[name] = value;
      

   });
  const resOfAmount = user.amount;
  console.log(resOfAmount);

  const delay = user.delay
  console.log(delay);

  const position = user.step;
  console.log(position);
 
  
  e.currentTarget.reset();
  
 
  const createPromise = (position, delay) => {
    return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setInterval(() => {
        if (shouldResolve) {
      // Fulfill 
      resolve({ position, delay });
    } 
      // Reject
      reject({ position, delay });
    
       }, 2000)
  });
  };



  createPromise(delay, position)
    .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
};



// ============================================================================



// const promise = new Promise((resolve, reject) => {
//   const resOfRandom = Math.random() > 0.5;

//   setTimeout(() => {
//     if (resOfRandom) {
//       resolve('good');
//     } reject('bad');
//   },2000)
//  });
// // promise.then(onResult, onError);
// function onResult(result) {
//   console.log(`${result}`)
// };
// // function onError(error) {
// //   console.log(`${error}`)
// // }
// promise
//   .then(onResult)
//   .then(x => {
//     console.log(x);
//     throw new Error('помилка в другому зен');
//   }).catch(error => console.log(error))
//   .finally(() => console.log('fffffffffffff'));