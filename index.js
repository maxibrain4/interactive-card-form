"use strict";
const btnSubmit = document.querySelector(".btn");
const nameInput = document.querySelector(".largeForm1");
const cardName = document.querySelector(".cardName");
const numInput = document.querySelector(".largeForm2");
const cardNumber = document.querySelector(".card-number");
const ccvNumber = document.querySelector(".ccv");
const ccvInput = document.querySelector(".ccvinput");
const monthInput = document.querySelector(".date1");
const yearInput = document.querySelector(".date2");
const formInput = document.querySelector(".formInput");
const form = document.querySelector(".form");
// const errorDisplay = document.querySelector(".error");
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

// let x = document.querySelector(".largeForm2").value;

form.addEventListener("click", function (e) {
  e.preventDefault();
  validInput();
});
const setError = function (element, message) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};
const setSuccess = function (element) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validInput = function () {
  const nameInputValue = nameInput.value;
  const numInputValue = numInput.value;
  const monthInputValue = monthInput.value;
  const ccvInputValue = ccvInput.value;
  const yearInputValue = yearInput.value;

  if (nameInputValue === "") {
    setError(nameInput, "Please enter your name");
  } else {
    setSuccess(nameInput);
  }

  if (numInputValue === "") {
    setError(numInput, "Please enter a number");
  } else {
    setSuccess(numInput);
  }
  if (ccvInputValue === "") {
    setError(ccvInput, "Can't be blank");
  } else {
    setSuccess(ccvInput);
  }
  if (monthInputValue === "") {
    setError(monthInput, "Can't be blank");
  } else {
    setSuccess(monthInput);
  }
};
