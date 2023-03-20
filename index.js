"use strict";
const btnSubmit = document.querySelector(".btn");
const errorMessageOne = document.querySelector(".errorMessage1");
const errorMessageTwo = document.querySelector(".errorMessage2");
let x = document.querySelector(".largeForm2").value;

btnSubmit.addEventListener("click", function () {
  errorMessageOne.innerHTML = "";
  try {
    if (x.trim() == "") throw "input can not be empty";
    if (isNaN(x)) throw "Wrong format, numbers only";
  } catch (err) {
    errorMessageOne.innerHTML = err;
  }
});
