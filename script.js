"use strict";
//A Program that shows allfactors of a number the user provides
const numb = parseInt(prompt("Enter the mumber:"));
for (let i = 1; i <= numb; i++) {
  if (numb % i == 0) {
    console.log(i);
  }
}
