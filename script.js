"use strict";
//A Program that shows allfactors of a number the user provides
//User input number
const numb = parseInt(prompt("Enter the mumber:"));
//loop the number from 1 to the input number
for (let i = 1; i <= numb; i++) {
  //check the factors
  if (numb % i == 0) {
    console.log(i);
  }
}
