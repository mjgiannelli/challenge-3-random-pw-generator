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
var specialChar = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "=", ">", "<", "?", "@", "^", "_", "`", "{", "|", "{", "~"]

// create an empty array to add generated password to
var userPW = [];




//create generate password function based on criteria in pseudo code

function generatePassword() {

  // ask user to enter number of desired characters 8-128 
  var charSelect = parseInt(prompt("How many characters would you like your PW to be? Please enter at least 8 and no more than 128."));

  if (charSelect < 8 || charSelect > 128 || isNaN(charSelect) === true) {
    alert("Invalid response. Please enter at least 8 but not more than 128.");
    return generatePassword();
  }
  else {
    pwCriteria.charAmount = charSelect;
  }

  // ask if they want to include capital letters
  var confirmCapital = confirm("Would you like to include capital letters?");
  pwCriteria.includeUpper = confirmCapital;
  console.log(pwCriteria.includeUpper);

  // ask if they want to include lowercase letters
  var confirmLower = confirm("Would you like to include lower case letters?");
  pwCriteria.includeLower = confirmLower;
  console.log(pwCriteria.includeLower);


};






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// create user object to hold answers to prompts to determine how to generate password
var pwCriteria = {
  charAmount: 0,
  includeUpper: null,
  includeLower: null,
  includeSpecial: null
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

