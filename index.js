function reverseString (string) {
  if (string.length < 2) {
    return string
  } else {
    return reverseString(string.substring(1)) + string[0]
  }
 
}

function reverseString(myString) {
  if (myString.length < 2) {
    return myString;
  } else {
    return reverseString(myString.substring(1)) + myString[0];
  }
}

function palindrome(string) {
  if (string.length === 1) {
    return true
  else if (string.length - 1 === string[0]) {
    return palindrome(string.substring(1, string.length - 1));
  } else {
    return false;
  }
}
