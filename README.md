Project in this module will be simple website with onclick attributes that call a handler function. User interactions will be handled with **prompt**, **confirm** and **alert**.

the algorithm scripting challenges provide solutions and detailed explanations to the algorithm scripting challenges that are part of the JavaScript Algorithm as we see below.

# Confirm the ending of a string  
This is an interesting challenge. We’re going to be checking if an input string ends with a given target end .
Algorithm:
1. Determine the length of target.
2. Pluck the same number of letters off the end of str.
3. Return true if those letters match target, and false if they don’t.
```javascript 

function confirmEnding(str, ending) {
  return str.slice(str.length - ending.length) === ending 
}

 ```
 --------
# convert to fahrenheit
Converting a temperature from Celsius to Fahrenheit is a common calculation.The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
## Provided Test Cases
* convertToF(0) should return a value of 32.
* convertToF(-30) should return a value of -22.
* convertToF(-10) should return a value of 14.
 
Algorithm: The steps to convert from Celsius to Fahrenheit are as follows:
1. Multiply Celsius value by 9/5
2. Add 32 to Celsius value
```javascript 

function convertToFahrenheit(C) {
  return C * 9/5 + 32
}

 ``` 
-----
# convert to celsius
Converting a temperature from fahrenheit to celsius is a common calculation as well.The algorithm to convert from Fahrenheit to Celsius is the temperature in fahrenheit - 32 multiply fahrenheit by 5/9.
## Provided Test Cases
* convertToC(-22_) should return a value of -30.
* convertToC(-14) should return a value of 10.
* convertToC(32) should return a value of 0.

Algorithm: The steps to convert from Celsius to Fahrenheit are as follows:
1. multiply fahrenheit by 5/9.
2. subtraction 32 to fahrenheit value
```javascript 

function convertToCelsius(F) {

  const c = (F - 32) * 5 / 9;
  return c;
 }
 ``` 
-------
# Find the longest word in a string
This is a classic algorithm scripting challenge. Pluck out the longest word in a string!
Return the length of the longest word in the provided sentence.
response should be a number.
## Provided Test Cases
* findLongestWordLength("The quick brown fox jumped over the lazy dog") should return  number 6.
* findLongestWordLength("May the force be with you") should return 5.
## Algorithm:
1. Split the string of words into an array of words.
2. Create an array with the length of each word.
3. Return the highest number in that array.
```javascript 

function findLongestWordLength(str) { let sortedWords = str.split(' ').sort((a, b) => b.length - a.length)
return sortedWords[0].length}

}
 ``` 
------
# Repeat a string
This is a fun challenge! We’re going to just repeat a given string a certain number of times. This is a great challenge to brush up on fundamentals of for and while loops.
## Provided Test Cases 
* repeatStringNumTimes("*", 3) should return "***".
* repeatStringNumTimes("abc", 3 should return     "abcabcabc".
* repeatStringNumTimes("abc", 4) should return "abcabcabcabc". 

## Algorithm:

1. If num is zero, return an empty string.
2. If num is not zero, repeat str the same number  of times as num.
3. Return the repeated string.
```javascript 

function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return ''
  }
  let repeatedString = ''
  for (let i = 0; i < num; i++) {
    repeatedString += str
  }
  return repeatedString
}
 ``` 
----------
# Reverse a string
Reverse the provided string.put the letters in the opposite order! You may need to turn the string into an array before you can reverse it.Your result must be a string.
## Provided Test Cases
* reverseString("hello") should return a string.
* reverseString("hello") should become "olleh".
* reverseString("greetings from earth") should become "htraE morf sgniteerG".

```javascript 

function reverseString(str) {
  let reversedString = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i]
  }
  return reversedString
}
 ``` 
