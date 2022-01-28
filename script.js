 // Assignment Code
var CharacterAmountRange = document.getElementById('CharacterAmountRange')
var CharacterAmountNumber = document.getElementById('CharacterAmountNumber')
var includeUppercaseEl = document.getElementById('includeUppercase')
var includeLowercaseEl = document.getElementById('includeLowercase')
var includeNumbersEl = document.getElementById('includeNumbers')
var includeSymbolsEl = document.getElementById('includeSymbols')
var form = document.getElementById('passwordGeneratorForm')
var password = document.getElementById('password')
var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
var NUMBERS_CHAR_CODES = arrayFromLowToHigh(48, 57)
var SYMBOLS_CHAR_CODES = arrayFromLowToHigh(33, 47)
CharacterAmountNumber.addEventListener('input', syncCharacterAmount)
CharacterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
   e.preventDefault()
  var CharacterAmount = CharacterAmountNumber.value
  var includeUppercase = includeUppercaseEl.checked
  var includeLowercase = includeLowercaseEl.checked
  var includeNumbers = includeNumbersEl.checked
  var includeSymbols = includeSymbolsEl.checked
  var password = generatePassword(CharacterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols)
  passwordDisplay.innerText = password
})
function generatePassword(CharacterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols){
  let charCodes = LOWERCASE_CHAR_CODES
  if(includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if(includeNumbers) charCodes = charCodes.concat(NUMBERS_CHAR_CODES)
  if(includeSymbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES)
  var passwordCharacters = []
  for (let i = 0; i < CharacterAmount; i++) {
    var CharacterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(CharacterCode))
  }
  return passwordCharacters.join('')
  
}

function arrayFromLowToHigh(low, high) {
  var array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array;
}

function syncCharacterAmount(e) {
   let value = e.target.value
   CharacterAmountNumber.value = value
   CharacterAmountRange.value = value
 }


