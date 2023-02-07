function telephoneCheck(str) {
  const validNumberPatterns = [
    // 555-555-5555
    /^\d{3}-\d{3}-\d{4}$/,
    // (555)555-5555
    /^\(\d{3}\)\d{3}-\d{4}$/,
    // (555) 555-5555
    /^\(\d{3}\) \d{3} \d{4}$/,
    // 555 555 5555
    /^\d{3} \d{3} \d{4}$/,
    // 5555555555
    /^\d{10}$/,
    // 1 555 555 5555
    /^1 \d{3} \d{3} \d{4}$/,
    // 1 555-555-5555
    /^1 \d{3}-\d{3}-\d{4}$/,
    // 1 (555) 555-5555
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    // 1(555)555-5555
    /^1\(\d{3}\)\d{3}-\d{4}$/
  ];

  return validNumberPatterns
    .some((pattern) => pattern.test(str));
}

console.log(telephoneCheck("2(757)622-7382")); // false
console.log(telephoneCheck("-1 (757) 622-7382")); // false

telephoneCheck("555-555-5555"); // true
