// Define a function named sum that takes two arguments
//    a (number)
//    b (number)
//
// Return the sum of these two arguments
function sum(a, b) {
  // return a + b;
  return a + b;
}

// Define a function named product that takes two arguments
//    a (number)
//    b (number)
//
// Return the product of these two arguments
function product(a, b) {
  // YOUR CODE HERE
  return a * b;
}

// Define a function named sumAndProduct that takes three arguments
//    x (number)
//    y (number)
//    z (number)
//
// Return the sum of the first two arguments multiplied by the third argument.
// For example, given 1, 2, and 5, then return 15.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping
function sumAndProduct(x, y, z) {
  return (x + y)*z;

}

// Define a function named roundUp that takes one argument
//    decimal (number)
//
// Return the argument rounded up to the nearest integer
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
function roundUp(decimal) {
  return Math.ceil(decimal);

}

// Define a function named toFahrenheit that takes one argument
//    celsius (number)
//
// Return the argument converted to Fahrenheit rounded to the nearest integer.
// Use Google to find the formula.
function toFahrenheit (celsius) {
  return Math.round(celsius*1.8 +32);

}


// Define a function named areaOfCircle that takes one argument
//    radius (number)
//
// Return the area of a circle using that argument. Use Google to find the
// formula.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI

function areaOfCircle(radius){
  return Math.PI*Math.pow(radius,2);

}

// Define a function named areaOfRing that takes two arguments
//    outerRadius (number)
//    innerRadius (number)
//
// Return the area of a circular ring using these arguments. Use Google to find
// the formula.
function areaOfRing(outerRadius, innerRadius){
  return areaOfCircle(outerRadius) - areaOfCircle(innerRadius);
}


// Define a function named greet that takes 2 arguments
//    firstName (string)
//    lastName (string)
//
// Return a string in the format 'Hello, Kelly Rippa!' using these arguments
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Template_strings

function greet(firstName, lastName){
  var greeting = ('Hello, ' + firstName + " " + lastName + "!");
  return greeting;
}

// Define a function named toSentence that takes four arguments
//    word1 (string)
//    word2 (string)
//    word3 (string)
//    oxfordComma (boolean)
//
// If oxfordComma is true,
//    Return a string in the format "word1, word2, and word3."
// If oxfordComma is false,
//    Return a string in the format "word1, word2 and word3."
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#String_operators

function toSentence(word1, word2, word3, oxfordComma){
  if (oxfordComma === true) {
    x = (word1 + ", " + word2 + ", and " + word3 + ".");
    return x;
  } else {
    x = (word1 + ", " + word2 + " and " + word3 + ".");
    return x;
  }
}


// Define a function named toRoman that takes one argument
//    arabic (number)
//
// If the argument is less than 1
//    Return null
// If the argument is greater than 10
//    Return null
// Otherwise
//    Return the argument converted to a roman numeral string
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#switch_statement

function toRoman(arabic){
  if (arabic < 1){
    return null;
  } else if (arabic > 10){
    return null;
  }
    else if (arabic === 1) {
      return "I";
    }
    else if (arabic === 2) {
      return "II";
    }
    else if (arabic === 3) {
      return "III";
    }
    else if (arabic === 4) {
      return "IV";
    }
    else if (arabic === 5) {
      return "V";
    }
    else if (arabic === 6) {
      return "VI";
    }
    else if (arabic === 7) {
      return "VII";
    }
    else if (arabic === 8) {
      return "VIII";
    }
    else if (arabic === 9) {
      return "IX";
    }
    else if (arabic === 10) {
      return "X";
    }


  }

// Define a function toDolla that takes one argument
//    amount (number)
//
// Return the argument converted to a dollar currency string. For example, given
// 10, then return '$10.00'.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

function toDolla(amount){
  var x = ('$' + amount.toFixed(2));
  return x;
}


// Define a function named percentage that takes two arguments
//    numerator (number)
//    denominator (number)
//
// Return the percentage of the first argument divided by the second. For
// example, given 1 and 4, then return '25.0%'.
function percentage(numerator, denominator){
  var x = (((numerator/denominator) * 100).toFixed(1).toString() + '%');
  return x;
}



// Define a function named isStrictlyEqual that takes two arguments
//    value1 (anything)
//    value2 (anything)
//
// If the two arguments are both equal and have the same type
//    Return true
// Otherwise
//    Return false
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Strict_equality_using
//
// See https://dorey.github.io/JavaScript-Equality-Table/
function isStrictlyEqual(value1, value2){
  if (value1 === value2){
    return true;
  } else {
    return false;
  }
}


// Define a function named isLooselyEqual that takes two arguments
//    value1 (anything)
//    value2 (anything)
//
// If the two arguments are both equal regardless of type
//    Return true
// Otherwise
//    Return false
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using
function isLooselyEqual(value1, value2) {
  if (value1 == value2){
    return true;
  } else {
    return false;
  }
}


// Define a function named remainder that takes two arguments
//    numerator (number)
//    denominator (number)
//
// Return the remainder of the first argument divided by the second. For
// example, given 4 and 3, then return 1.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

function remainder(numerator, denominator){
  return numerator%denominator;
}

// Define a function named isEven that takes one argument
//    integer (number)
//
// If the number is even
//    Return true
// Otherwise
//    Return false
//
// Hint: What number will give you a remainder of 0 if the argument is even?

function isEven(integer){
  if (integer%2 === 0){
    return true;
  } else {
    return false;
  }
}

// Define a function named isOdd that takes one argument
//    integer (number)
//
// If the number is odd
//    Return true
// Otherwise
//    Return false
function isOdd(integer){
  if (integer%2 !== 0){
    return true;
  } else {
    return false;
  }
}


// Define a function named isVowel that takes one argument
//    letter (string)
//
// If the letter is a vowel
//    Return true
// Otherwise
//    Return false
//
// Treat 'y' as a consonant.

function isVowel(letter){
  if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
    return true;
  } else {
    return false;
  }
}


// Define a function named largestOfThree which takes three arguments
//    value1 (number)
//    value2 (number)
//    value3 (number)
//
// Return the largest argument by value
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

function largestOfThree(value1, value2, value3){
  if ((value1 >= value2) && (value1 >= value3)){
    return value1;
  } else if (
    (value2 >= value1) && (value2>= value3)){
      return value2;
    }
    else {return value3};

}

// Define a function named longestOfThree which takes three arguments
//    value1 (string)
//    value2 (string)
//    value3 (string)
//
// Return the longest argument by length
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

function longestOfThree(value1, value2, value3){
  if ((value1.length >= value2.length) && (value1.length >= value3.length)){
    return value1;
  } else if (
    (value2.length >= value1.length) && (value2.length>= value3.length)){
      return value2;
    }
    else {return value3};

}

// Define a function named iceCreamPosition that takes two arguments
//    pieTemperature (string)
//    iceCreamFlavor (string)
//
// If iceCreamFlavor is 'cardamom'
//    Return 'not at all' immediately
// Otherwise
//    If pieTemperature is 'cold'
//      Return 'on top'
//    If pieTemperature is 'warm'
//      Return 'on the side'
// Otherwise
//    Return 'up to you'

function iceCreamPosition(pieTemperature, iceCreamFlavor){
  if (iceCreamFlavor === 'cardamom'){
    return 'not at all';
  } else {
      if (pieTemperature === 'cold'){
        return 'on top';
      } else if (pieTemperature === 'warm'){return 'on the side';
  } else {
    return 'up to you';
  }
}
}

// Define a function named isLeapYear that takes one argument
//    year (number)
//
// If the argument is a leap year
//    Return true
// Otherwise
//    Return false
//
// See: https://en.wikipedia.org/wiki/Leap_year#Algorithm

function isLeapYear(year){
  if (year%4 !== 0) {
    return false;
  } else if (year%100 !== 0){
    return true;
  } else if (year%400 !== 0){
    return false;
  } else {
    return true;
  }

}

// Define a function named shout that takes one argument
//    message (string)
//
// Return the same argument but all in uppercase letters. For example, given
// 'Shut the front door', then return 'SHUT THE FRONT DOOR'
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

function shout(message){
  return message.toUpperCase();
}

// Define a function named whisper that takes one argument
//    message (string)
//
// Return the same argument but all in lowercase letters and prefixed by
// 'shhh... '. For exaple, given 'GOLF TIME', then return "shhh... golf time"
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

function whisper(message){
  return ('shhh... ' + message.toLowerCase());
}

// Define a function named stopAt that takes two arguments
//   source (string)
//   stop (string)
//
// Return the source all the way up to the position where stop begins. For
// example, given 'how now brown cow' and 'brown', then return 'how now'.
//
// Hint: This will require a combination of 3 different steps
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
function stopAt(source, stop){
  var stopHere = source.indexOf(stop);
  return source.substring(0, stopHere).trim();
}


// Define a function named capitalize that takes one argument
//    message (string)
//
// Return the argument with the first letter capitalized. For example, given
// 'oh, you', then return 'Oh, you'.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
function capitalize(message){
  var capitalizedWord = message[0].toUpperCase() + message.slice(1);
  return capitalizedWord;
}



// Define a function named leftPad5 that takes one argument
//    word (string)
//
// If the argument's length is less than 5
//    Return the argument but prefixed with spaces until it's 5 characters long
// If the argument's length is 5 or more characters
//    Return the argument

function leftPad5(word){
  if (word.length >= 5){
    return word;
  } else {
    while (word.length < 5){
      word = " " + word;
    }
    return word;
  }
}

// Define a function named superPicky that takes one argument
//    value (anything)
//
// If the argument is a string,
//    Return 'Thanks! Got it.'
// Otherwise
//    Return 'I wanted a string, but all I got was a stinking TYPE'
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

function superPicky(value){
  var x = typeof value;
  if ((x) === "string"){
    return 'Thanks! Got it.';
  } else {
    return 'I wanted a string, but all I got was a stinking ' + x;
  }
}

// Define a function named calculateTaxRate that takes two arguments
//    salary (number from 1 to 74,900)
//    status (string that's either 'single' or 'joint')
//
// If the status is anything other than 'single' or 'joint'
//    Return a string that says 'Better call an accountant'
// If the salary is greater than 74,900
//    Return a string that says 'Better call an accountant'
// Otherwise
//    Return the correct tax rate as a string using the table from http://www.efile.com/tax-service/tax-calculator/tax-brackets/

function calculateTaxRate(salary, status){
  if ((status !== 'single') && (status !== 'joint') ) {
    return 'Better call an accountant';
  }
  if (salary > 74900){
    return 'Better call an accountant';
  } else if (((salary <= 9225) && (status === 'single')) || ((salary <= 18450) && (status === 'joint'))) {
      var taxRate = '10%';
      return taxRate;
  } else if (((salary <= 37450) && (status === 'single')) || ((salary >= 18451) && (status === 'joint')))  {
      var taxRate = '15%';
      return taxRate;
  } else  {
      var taxRate = '25%';
      return taxRate;
  }
  }
