// Problem 1: Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("Problem 1:", reverseString("hello")); // "olleh"