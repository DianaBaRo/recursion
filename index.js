//string challenges

function reverseString (string) {
  if (string.length < 2) {
    return string
  } else {
    return reverseString(string.substring(1)) + string[0]
  }
 
};

function reverseString(myString) {
  if (myString.length < 2) {
    return myString;
  } else {
    return reverseString(myString.substring(1)) + myString[0];
  }
};

function palindrome(string) {
  if (string.length === 1) {
    return true
  else if (string.length - 1 === string[0]) {
    return palindrome(string.substring(1, string.length - 1));
  } else {
    return false;
  }
};
  
//Array challenges
 //Given an array and an index, write a recursive function to add up the elements of an array.
  
function sum (array) {
    if (array.length === 0) {
        return 0; 
    } else {
        return array[0] + sum(array.slice(1));
    };
};
  
 function sum (array, index) {
     if (index > 0) {
         return  array[index] + sum(array, --index);
     } else {
         return array[index];
     };
};

//Write a recursive function to find the largest integer in an array.
  
function largestInt(array) {
    if ( array.length === 0) {  //base case
        return array[0];
    } else {
        array.shift();
        return largestInt(array)
    }
}
  
//Write out a function to see if an array includes a given element.
  
