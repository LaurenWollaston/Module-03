// Assignment code here

function generatePassword(length, lowercase, uppercase, number, specialChar) {
  let charSet = '';
  let password = '';

  if (lowercase) {
    charSet += 'abcdefghijklmnopqrstuvwxyz';
    password += getRandomCharacterFromString(charSet);
  }

  if (uppercase) {
    charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    password += getRandomCharacterFromString(charSet);
  }

  if (number) {
    charSet += '0123456789';
    password += getRandomCharacterFromString(charSet);
  }

  if (specialChar) {
    charSet += '!@#$%^&*()';
    password += getRandomCharacterFromString(charSet);
  }

  const remainingLength = length - password.length;

  for (let i = 0; i < remainingLength; i++) {
    password += getRandomCharacterFromString(charSet);
  }

  return password;
}

function getRandomCharacterFromString(str) {
  const randomIndex = Math.floor(Math.random() * str.length);
  return str.charAt(randomIndex);
}


const testPass = generatePassword(12, true, true, true, true);
console.log(testPass);

// Modal Code
// Get the modal and the button that opens it
const modal = document.getElementById("modal");
const openModalButton = document.getElementById("generate");
var currentPassChars=0;
// Function to open the modal
function openModal() {
  modal.style.display = "block";
}
// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}
// Attach click event listeners to the button and close button
openModalButton.addEventListener("click", openModal);
document.getElementById("closeModalButton").addEventListener("click", closeModal);
// Close the modal when the user clicks outside of it
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

const passCharSelector = document.getElementById('passChars');
passCharSelector.addEventListener("input", function(){
 currentPassChars = passCharSelector.value;
 document.getElementById('passCharValue').innerText=currentPassChars;
});

// Get references to the #generate element
var generateBtn = document.getElementById("submit");
// Write password to the #password input
function writePassword() {
  let length = document.getElementById('passChars').value;
  let lowercase = document.getElementById('lowercase').value;
  let uppercase = document.getElementById('uppercase').value;
  let number = document.getElementById('number').value;
  let specialChar = document.getElementById('specialChar').value;
  var password = generatePassword(length, lowercase, uppercase, number, specialChar);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  modal.style.display = "none";
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
