class NumeralConverter {
  constructor(number) {
    this.number = number;
    this.result = '';
  }

  processNumeral(symbol, symbolValue) {
    while(this.number >= symbolValue) {
      this.result += symbol;
      this.number -= symbolValue;
    }
  }
}

function convertToRoman(num) {
  let converter = new NumeralConverter(num);
  converter.processNumeral('M', 1000);
  converter.processNumeral('CM', 900);
  converter.processNumeral('D', 500);
  converter.processNumeral('CD', 400);
  converter.processNumeral('C', 100);
  converter.processNumeral('XC', 90);
  converter.processNumeral('L', 50);
  converter.processNumeral('XL', 40);
  converter.processNumeral('X', 10);
  converter.processNumeral('IX', 9);
  converter.processNumeral('V', 5);
  converter.processNumeral('IV', 4);
  converter.processNumeral('I', 1);

  return converter.result;
}

convertToRoman(36);
