// Your task is to sum the differences between consecutive pairs in the array in descending order.

// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

const numbers = [20, 14, 31];
numbers.sort((a, b) => b - a);

let sum = 0

for (let i = 0; i < numbers.length - 1; i++) {
    const diff = numbers[i] - numbers[i + 1];
    sum += diff;
}

console.log(sum);


// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!
// You need to cast the whole array to the correct type.
// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

const stringNumbers = ['2', '3', '8', '9'];
const number = [];

for (let i = 0; i < stringNumbers.length; i++) {
const number1 = Number(stringNumbers[i]);
number.push(number1);
}
console.log(number);


