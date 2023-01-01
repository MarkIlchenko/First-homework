let firstNumber = parseInt(prompt("Enter First Number: "));
console.log("Your first number is: " + firstNumber);

let secondNumber = parseInt(prompt("Enter Second Number: "));
console.log("Your second number is: " + secondNumber);

let Addition_result = (firstNumber + secondNumber);
let Addition = ('2+2= ' + Addition_result + '  ');

let Subtraction_result = (firstNumber - secondNumber);
let Subtraction = ('  2-2= ' + Subtraction_result + '  ');

let Mutiplication_result = (firstNumber * secondNumber);
let Mutiplication = ('  2*2= ' + Mutiplication_result + '  ');

let Division_result = (firstNumber / secondNumber);
let Division = ('  2/2= ' + Division_result + '  ');

let result = [Addition, Subtraction, Mutiplication, Division];

alert('Your results are:    ' + result)