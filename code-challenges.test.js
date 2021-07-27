// ASSESSMENT 3: Coding practical questions with Jest

const { expect } = require("@jest/globals")
const { test } = require("jest-circus")
const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

// describe ("greater than 2", () => {
//     test("returns an array of that length containing the numbers of the Fibonacci", () => {
//         expect(greaterthan2(num1)).toEqual("[1, 1, 2, 3, 5, 8]")
//         expect(greaterthan2(num2)).toEqual("[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]")
//     })
// })



// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]



// b) Create the function that makes the test pass.



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("onlyOdds", () => {
    test("returns a new array of only odd numbers sorted from least to greatest", () => {
        var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
        var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
        expect(onlyOdds(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(onlyOdds(fullArr2)).toEqual([-823, 7, 23])
     


    })
})




var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []



// b) Create the function that makes the test pass.
