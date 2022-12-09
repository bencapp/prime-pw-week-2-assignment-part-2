// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')

// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/

// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called name and set its value to 'Dane.' It is a string.
// We check if the name variable is equal to 'Mary.' If so, we console log 'Hi, Mary!'
// If not, we console log 'How do you do?'
// name is not equal to 'Mary,' so the console outputs 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable called secret and do not assign it a value.
// We create a variable called code and set its value to 123. It is a number.
// We check if the code variable is equal to 123. Since it is, we set the secret variable equal to 'super'
// and multiply the code variable by 2. It is now equal to 246.
// We check if the code variable is greater than 250. Since it is not, secret does not change.
// We console log the secret variable and receive an output of 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create three variables: isStudent, which is set to true (a boolean); age, set to 34 (a number); and zip, set to 55407 (also a number).
// we check if isStudent is equal to true AND if zip is greater than 80000. zip is less than 80000, so
// we check if isStudent is false OR if age is less than 30. neither of these are true, so
// we check if isStudent is true again. It is, so we console log the message 'Welcome to Prime!'
// The last lines are not executed because the previous conditional was satisfied.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/

//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - we want to set colorOne to 'blue' and colorTwo to 'red', but this mixes them up.
// Should be: 
// let colorOne = 'blue';
// let colorTwo = 'red';
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - colorOne is set to 'purple' here, but not colorTwo. We should add a line within the conditional:
// colorTwo = 'purple';
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
// FIX - time should be declared using the 'let' keyword rather than the 'const' keyword, since we might want to change its value.
// **note: I'm not sure about this change since maybe we do want time to remain constant, but I intuit that it should be changeable.**
// it should read:
// let time = 4;
let temp = 40;
const time = 4;

// FIX - the OR operator is used here but we want to make sure that both conditions are true.
// It should read:
// if (temp > 39 && time >= 4) {}
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - The '<=' operator checks if minAge is less than or equal to age, so this code would output 'no entry' for any age greater than the minimum.
// There are multiple ways to fix the problem, but the one would be to switch the strings inside the console logs. The first console log should read
// console.log('enter'); and the second should read console.log('no entry');.
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
