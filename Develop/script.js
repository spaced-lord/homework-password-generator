// Assignment Code
var generateBtn = document.querySelector("#generate");

var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
// var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var lowercase = "abcdefghijklmnopqrstuvwxyz";
// var numbers = "0123456789"
// var symbols = "!@#$%^&*()+";

var count = prompt("How many characters are needed in your new password (more than 8, less than 128)?"); 
// var lower = confirm("Do you wish to use lowercase letters?"); 
// var upper = confirm("Do you wish to use uppercase letters?");
// var numbers = confirm("Do you wish to use numbers?");
// var specialChar = confirm("Do you wish to use special characters (!,#,&,$, etc.)?");




// // Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  for(var i = 0; i < characters.length; i++) {
      password = password + count(Math.floor(Math.random * '') - 1)
  }
  
    
    
  }

  

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  


// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {

  }

   

  




// console.log(password)