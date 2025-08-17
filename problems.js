// Problem 1: Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // "olleh"


// Problem 2: Count Vowels in a String
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("programming")); // 3


// Problem 3: Check for Palindrome
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false


// Problem 4: Find the Maximum Number
function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
console.log(findMax([5, 1, 9, 3])); // 9


// Problem 5: Remove Duplicates from an Array
function removeDuplicates(arr) {
  let unique = [];
  for (let num of arr) {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }
  return unique;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]


// Problem 6: Sum of All Numbers in an Array
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4])); // 10


// Problem 7: Find Even Numbers in an Array
function findEven(arr) {
  let evens = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}
console.log(findEven([1, 2, 3, 4, 5, 6])); // [2, 4, 6]


// Problem 8: Capitalize First Letter of Each Word
function capitalizeWords(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
console.log(capitalizeWords("hello world")); // "Hello World"


// Problem 9: Find the Factorial of a Number
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5)); // 120


// Problem 10: PingPong Challenge
function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}
pingPong();