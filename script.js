// Assignment Code
var generateBtn = document.querySelector("#generate");
const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const UppercaseElement = document.getElementById('Uppercase')
const NumbersElement = document.getElementById('Numbers')
const SymbolsElement = document.getElementById('Symbols')
const password = document.getElementById('password')
const UPPERCASE_CHAR_CODES = arrayFromLowtoHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowtoHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowtoHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowtoHigh(33, 47).concat(
  arrayFromLowtoHigh(58, 64)
).concat(
  arrayFromLowtoHigh(91, 96)
).concat(
  arrayFromLowtoHigh(123, 126)
)






// Write password to the #password input
function writePassword(characterAmount, Uppercase, Numbers, Symbols) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  let charCodes = LOWERCASE_CHAR_CODES
  if (Uppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (Numbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  if (Symbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)

  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() *
      characterAmount)]
      passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
  

}

function arrayFromLowtoHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)
generateBtn.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const Uppercase = UppercaseElement.checked
  const Numbers = NumbersElement.checked
  const Symbols = SymbolsElement.checked
  const password = generatePassword(characterAmount, Uppercase, Numbers, Symbols)
  password.innerText = password
})



function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}

