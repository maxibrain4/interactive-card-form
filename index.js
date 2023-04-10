"use strict";
// const btnSubmit = document.querySelector(".btn");
// const errorMessageOne = document.querySelector(".errorMessage1");
// const errorMessageTwo = document.querySelector(".errorMessage2");
// let x = document.querySelector(".largeForm2").value;

// btnSubmit.addEventListener("click", function () {
//   errorMessageOne.innerHTML = "";
//   try {
//     if (x.trim() == "") throw "input can not be empty";
//     if (isNaN(x)) throw "Wrong format, numbers only";
//   } catch (err) {
//     errorMessageOne.innerHTML = err;
//   }
// });
const nameInput = document.querySelector(".largeForm");
const cardName = document.querySelector(".cardName");
const numInput = document.querySelector(".largeForm2");
const cardNumber = document.querySelector(".card-number");
const ccvNumber = document.querySelector(".ccv");
const ccvInput = document.querySelector(".ccvinput");

//
nameInput.addEventListener("input", function () {
  cardName.textContent = nameInput.value;
});

ccvInput.addEventListener(
  "input",
  () => (ccvNumber.textContent = ccvInput.value)
);

numInput.addEventListener("input", function () {
  const formatNumber = (number) =>
    number.split("").reduce((seed, next, index) => {
      if (index !== 0 && !(index % 4)) seed += " ";
      return seed + next;
    }, "");
  cardNumber.textContent = numInput.value = formatNumber(
    numInput.value.replaceAll(" ", "")
  );
});
