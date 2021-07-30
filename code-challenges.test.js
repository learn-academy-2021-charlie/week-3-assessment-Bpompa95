// ASSESSMENT 3: Coding practical questions with Jest

// const { expect } = require("@jest/globals")
// const { test } = require("jest-circus")
// const { describe } = require("yargs")

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

describe ("greaterThan2", () => {
    test("returns an array of that length containing the numbers of the Fibonacci", () => {
         num1: 6
// Expected output: [1, 1, 2, 3, 5, 8]

        num2: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
        // expect(greaterThan(num1)).toEqual([1, 1, 2, 3, 5, 8])
        // expect(greaterThan(num2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})



// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]



// b) Create the function that makes the test pass.
// i am not going to lie i was having so much trouble fixing question 1 i kept trying more then 6 times even when i was work i was still trying so sorry that this work is late but thank god for class mates they helped me out and tutor and finally i understand how to make question 1 pass.

//creating the function that takes in a number
const fib = (num) => {
    let array = [1, 1]
    for (let i = 2; i < num; i++ ){
      array.push(array[i-2] + array[i-1])
    } return array
    }








// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("leastTogreatest", () => {
    test("returns a new array of only odd numbers sorted from least to greatest", () => {
        var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
        var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
        // expect(leastTogreatest(fullArr1)).toEqual([-9, 7, 9, 199])
        // expect(leastTogreatest(fullArr2)).toEqual([-823, 7, 23])
     


    })
})

// so i made the test fail that's a good thing now i am going to make it pass.




// var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

// var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// the good thing that i rememeber in class for the least to greater method 
// and that is the .sort() why because it can sort your numbers from least to greatest like for another example if i want to use it on my letters C, F, A, D, B, E i will get A, B, C, D, E, F.
// i look back on my syllabus and there is another one that we are going to use and that is filter() because we want a new array but we also want the truth.
// we are also going to use typeof while using filter 

// b) Create the function that makes the test pass.

const leastTogreates = (arr) => {
    let onlyOdds = arr.filter(value => (typeof(value) === "number") && (value % 2 !==0))

    return onlyOdds.sort((a,b) => a-b)

}



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
describe("sumArr", () => {
    test("returns an array of the accumulating sum. An empty array should return an empty array.", () => {
var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []
// expect(sumArr(numbersToAdd1)).toEqual([2, 6, 45, 60])
// expect(sumArr(numbersToAdd2)).toEqual([0, 7, -1, 12])
// expect(sumArr(numbersToAdd3)).toEqual([])

    })
})

// I failed the first that's a good thing now i have to make it pass.

// b) Create the function that makes the test pass.
// first thing i need a function so, when i created a function it take the array as an argument.
// so the next step that i am going to do a give a new array use concat because concat will let merge two or more arrays and combined into an array.
// then i am going to use for loop and .length 
// then i assign my new array and the index equal to new array subtract index and 1 then add to array index 
//  and then for my return is new array

const sumArr = (array) => {
    let newArray = array.concat()
          for(let i = 1; i < array.length; i++) {
                newArray[i] = newArray[i-1] + array[i]   
        }

      return newArray



}


