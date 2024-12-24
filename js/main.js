// const button = document.getElementById('button');

// button.addEventListener('click', () => {
//     alert('Hello World');
// });

// const randomNumber = Math.floor(Math.random() * 100) + 1;

// const check = () => {
//   const userGuess = parseInt(document.getElementById("guessField").value, 10);

//   if (userGuess === randomNumber) {
//     alert("Ви вгадали число");
//   } else if (userGuess < randomNumber) {
//     alert("Загадане число більше");
//   } else {
//     alert("Загадане число менше");
//   }
// };

// document.getElementById("checkButton").addEventListener("click", check);


// let click = 0;

// document.addEventListener('click', () => {
//     click++;
//     alert(`Було клікнуто ${click} разів`);
        
// });

// const applyCallbackToEachElement = (arr, callback) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i]));
//   }
//   return result;
// };

// const arr = [1, 2, 3, 4, 5];
// const squareCallback = (num) => num * num;

// const result = applyCallbackToEachElement(arr, squareCallback);
// console.log(result);



const calculateDiscountedPrice = (price, discount, callback) => {
  const discountedPrice = price - (price * (discount / 100));
  callback(discountedPrice);
};


const showDiscountedPrice = (discountedPrice) => {
  console.log(`Discounted price: ${discountedPrice}`);
};

calculateDiscountedPrice(100, 10, showDiscountedPrice); 
