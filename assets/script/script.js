// Pseudo code
// create an empty array
// when user clicks "generate password button", they will be prompted to answer the following questions:
// a) How many characters? (btw 8 to 128) and set the iteration to the answer to this prompt
//   1) if they enter an invalid response then ask them again
//   1) set the iteration's lenth to this answer
// b) ask if they want lowercase?
// c) ask if they want uppercase?
// d) ask if they want numeric?
// e) ask if they want special characters?
//      Put these questions in the writePassword function.
// take the responses and develop a function that iterates through a list of available characters and adds them to the empty array variable for the password
// then display the password array in the white text box


// Assignment Code
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "=", ">", "<", "?", "@", "^", "_", "`", "{", "|", "{", "~"]

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
