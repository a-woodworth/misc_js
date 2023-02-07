const lookup = {'M': 1000, 'CM': 900, 'D': 500, 'CD':400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1}

class NumeralConverter {
  constructor(number){
    this.number = number;
    this.result = '';
  }
  processNumeral(symbol, symbolValue) {
    while (this.number >= symbolValue) {
      this.result += symbol;
      this.number -= symbolValue;
    }
  }
}


function convertToRoman(num) {
  let converter = new NumeralConverter(num);
  for (const roman in lookup) {
    converter.processNumeral(roman, lookup[roman]);
  }
  return converter.result;
}

console.log(convertToRoman(1776));
console.log('Answer should be: MDCCLXXVI');

console.log(convertToRoman(2893));
