
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbersArray = ["0","1","2","3","4","5","6","7","8","9"]
var symbolsArray = ["!","@","#","$","%","^","&","*","(",")"]


// Takes in user input and checks that all varibles are present.
function getPasswordOptions()  {
  var n = prompt("How many characters are needed in your new password (more than 8, less than 128)?")
    if (isNaN(n) || n < 8 || n > 128) {
      return
    }
    var lower = confirm("Do you wish to use lowercase letters?"); 
    var upper = confirm("Do you wish to use uppercase letters?");
    var numbers = confirm("Do you wish to use numbers?");
    var symbols = confirm("Do you wish to use special characters (!,#,&,$, etc.)?");
    if (lower === false && upper === false && numbers === false && symbols === false) {
      alert("Please, make a selection.")
      return
    } 
    var passwordOptions = {
      length: n,
      lower: lower,
      upper: upper,
      numbers: numbers,
      symbols: symbols,
    } 
    return passwordOptions
}
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length)
  var randomEl = arr[randomIndex]
  return randomEl
}

// Notes all possible characters

function generatePassword() {
  var result = []
  var possibleCharacters = []
  var garuanteedCharacters = []
  var options = getPasswordOptions()

  if (options.lower === true) {
    possibleCharacters = possibleCharacters.concat(lowercase)
    
  } 

  if (options.upper === true) {
    possibleCharacters = possibleCharacters.concat(uppercase)
  
  }
  if (options.numbers === true) {
    possibleCharacters = possibleCharacters.concat(numbersArray)
  }

  if (options.symbols === true) {
    possibleCharacters = possibleCharacters.concat(symbolsArray)
  }

  console.log(garuanteedCharacters)
  // for loops to randomize array

  
    for(i=0; i < options.length; i++) {
      result.push(getRandom(possibleCharacters));
  }
  
  console.log(possibleCharacters)


  return result.join("")
}
  
 

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

