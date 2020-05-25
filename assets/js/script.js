// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  // you can create a function named generatePassword that creates the password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword(){
// array to store all the password criteria 
  var chosen=[];

// asking the user which password criteria to include and storing inputs in variables
  var upper = confirm("include upper case letters?");
  var lower = confirm("include lower case letters?");
  var special = confirm("include special characters?");
  var number = confirm("include numbers?");

// validating input and ensuring at least 1 char type is included
  while (upper === false && lower === false && special=== false && number === false){
    alert("Please choose at least one type of character!");
    var upper = confirm("include upper case letters?");
    var lower = confirm("include lower case letters?");
    var special = confirm("include special characters?");
    var number = confirm("include numbers?");
  }

// prompting user for password length and ensuring it's between 8-128
  var userLength = prompt("How long would you like your password to be? 8-128");
  while ( userLength<8 || userLength>128){
    alert("Please choose a length between 8-128");
    userLength = prompt("How long would you like your password to be? 8-128");
  }

// arrays for each of the password criteria
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var specialChar = ["\"","!","#","$","%","&","\'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","`","{","|","}","~"];
  var num = ["0","1","2","3","4","5","6","7","8","9"];

// if uppercase letters are included then go through the upperCase array and push into chosen
  if(upper) {
    for(var i=0;i<upperCase.length;i++){
      chosen.push(upperCase[i]);
    }
  }

// if losercase letters are included then go through the lowerCase array and push into chosen
  if(lower) {
    for(var j=0;j<lowerCase.length;j++){
      chosen.push(lowerCase[j]);
    }
  }

// if special characters are included then go through the specialCHar array and push into chosen
  if(special) {
    for(var k=0;k<specialChar.length;k++){
      chosen.push(specialChar[k]);
    }
  }

// if numbers are included then go through the num array and push into chosen
  if(number) {
    for(var l=0;l<num.length;l++){
      chosen.push(num[l]);
    }
  }

// variable finalResult stores all password criteria included and userLength entered 
// randomize through the chosen array for the length of userLength is 
  var finalResult=[];
  for(m=0; m<userLength; m++){
    finalResult.push(chosen[Math.floor(Math.random()*chosen.length)]);
   
  }
  return finalResult.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



