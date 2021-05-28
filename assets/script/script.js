// Pseudo code
// create an empty array for userPW
// create an object for user responses
// when user clicks "generate password button", they will be prompted to answer the following questions:
// a) How many characters? (btw 8 to 128) and set the iteration to the answer to this prompt
//   1) if they enter an invalid response then ask them again
//   1) set the iteration's lenth to this answer
// b) ask if they want lowercase?
// c) ask if they want uppercase?
// d) ask if they want numeric?
// e) ask if they want special characters?
//      Put these questions in the writePassword function.
// adjust user object based on responses
// take the responses and develop a function that iterates through a list of available characters and adds them to the empty array variable for the password
// then display the password array in the white text box


// identify the available character choices for user's password
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "=", ">", "<", "?", "@", "^", "_", "`", "{", "|", "{", "~"]
var pwGenerated = [];
//create generate password function based on criteria in pseudo code

function generatePassword() {


  var charAmount = prompt("How many characters would you like your PW to be? Please enter at least 8 and no more than 128.");

  var placeHolder = document.querySelector("#password[placeholder]").textContent;

  // allow user to cancel out of generate password prompt. If previous password was generated- keep on screen.
  if (charAmount === null) {
    if (pwGenerated) {
      return pwGenerated.join("");
    }
    return placeHolder;
  }
  // ask user to enter number of desired characters 8-128 
  if (charAmount < 8 || charAmount > 128 || isNaN(charAmount) === true) {
    console.log(charAmount);
    alert("Invalid response. Please enter at least 8 but not more than 128.");
    return generatePassword();
  }
  else {
    pwCriteria.charAmount = charAmount;
  }

  //TODO add prompt function
  promptUser();

  //check to see if the value of pwGenerated contains letters - if so reset the value to an empty array
  if (pwGenerated) {
    pwGenerated = [];
    // run the random character function over the value that user entered for charAmount
    for (var i = 0; i < charAmount; i++) {
      randomChar();
    }
  }
  // returns the generated password without the commas included
  return pwGenerated.join("");
};

// TODO create a function for this so if all equal false we can have the questions be asked again
function promptUser() {

  // ask if they want to include capital letters
  var confirmCapital = confirm("Would you like to include capital letters?");
  pwCriteria.includeUpper = confirmCapital;

  // ask if they want to include lowercase letters
  var confirmLower = confirm("Would you like to include lower case letters?");
  pwCriteria.includeLower = confirmLower;

  // ask if they want to include numbers
  var confirmNum = confirm("Would you like to include numbers?");
  pwCriteria.includeNum = confirmNum;

  // ask if they want to include special characters
  var confirmSpecial = confirm("Would you like to include special characters?");
  pwCriteria.includeSpecial = confirmSpecial;

  // TODO check if the values all equal false - if so will rerun user prompts
  if (pwCriteria.includeUpper === false && pwCriteria.includeUpper === false && pwCriteria.includeUpper === false && pwCriteria.includeUpper === false) {
    alert("You selected to not include any characters! Try again! ");
    return promptUser();
  }
}


// create user object to hold answers to prompts to determine how to generate password
var pwCriteria = {
  charAmount: 0,
  includeUpper: null,
  includeLower: null,
  includeNum: null,
  includeSpecial: null
}

// create a function that pulls a random character from newly created array based on user's responses

function randomChar() {
  // create an empty array that adds the specific character arrays from above only if their pwCriteria === true
  var pwCharArray = [];

  if (pwCriteria.includeUpper === true) {
    pwCharArray = pwCharArray.concat(upperCase);
  }

  if (pwCriteria.includeLower === true) {
    pwCharArray = pwCharArray.concat(lowerCase);
  }

  if (pwCriteria.includeNum === true) {
    pwCharArray = pwCharArray.concat(numericList);
  }

  if (pwCriteria.includeSpecial === true) {
    pwCharArray = pwCharArray.concat(specialChar);
  }

  // use math.random function to pick a random character from the array
  var randomCharSelected = pwCharArray[Math.floor(Math.random() * pwCharArray.length)];

  return pwGenerated = pwGenerated.concat(randomCharSelected);

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

