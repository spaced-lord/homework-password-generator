// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "lower case letters"
var uppercase = "upper case letters"
var numeric = "0 through 9"
var specialChar = "Special characters"





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
