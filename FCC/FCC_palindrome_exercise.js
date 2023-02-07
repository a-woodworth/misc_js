function palindrome(str) {
  const regex = /[\W_]/g;
  const formattedString = str.toLowerCase().replace(regex, '');
  const reversedString = formattedString.split('').reverse().join('');
  return formattedString === reversedString;
}
console.log(palindrome("2A3*3a2")); //true
console.log(palindrome("0_0 (: /-\ :) 0-0")); //true
console.log(palindrome("not a palindrome")); // false
console.log(palindrome("five|\_/|four")); //false
palindrome("eye");