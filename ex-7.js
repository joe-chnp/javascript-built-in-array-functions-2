function isPalindrome(string) {
  // Start coding here
  return `${[...string]}` === `${[...string].reverse()}`;
};

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false