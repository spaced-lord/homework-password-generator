
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var symbols = ["!","@","#","$","%","^","&","*","(",")"]

function generatePassword() {

  var userInput = []
  var criteria = [] 
  var randomize = []

  var count = (function ask(){
    var n = prompt("How many characters are needed in your new password (more than 8, less than 128)?")
    return isNaN(n) || +n > 128 || -n < 8 ? ask() : n;
}) ();

    function characters() {
      var lower = confirm("Do you wish to use lowercase letters?"); 
      if (lower == true) {
        return lower.push(userInput);
      } else null
      
      var upper = confirm("Do you wish to use uppercase letters?");
      if (upper == true) {
        return upper.push(userInput);
      } else null

      var numbers = confirm("Do you wish to use numbers?");
      if (numbers == true) {
        return numbers.push(userInput);
      } else null

      var symbols = confirm("Do you wish to use special characters (!,#,&,$, etc.)?");
      if (symbols == true) {
        return symbols.push(userInput);
      } else null

        for(i = 0; i < userInput.length; i++) {
          var criteria = userInput[i];
        }
    }

// call function, define that function, take confirm to see if all are false, call back if so. 
// If statements if confirm is true to .push from respective array into userInput. 
// for loop for length of userInput array. determines the length of a new array that you will while if else, splice, another for loop that randomize (math.floor(math.randow), 
// Take array and make it a string and return the string.

// make two more arrays under userInput.

// var lower = confirm("Do you wish to use lowercase letters?"); 
// var upper = confirm("Do you wish to use uppercase letters?");
// var numbers = confirm("Do you wish to use numbers?");
// var specialChar = confirm("Do you wish to use special characters (!,#,&,$, etc.)?");


console.log(getPassword())


// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
  
 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generateBtn = document.querySelector("#generate");

   

  

}
