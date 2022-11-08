/**
 * Implementing FizzBuzz in Javascript
 */


// № 1
let array
array = []
for (let j = 0; j < 101; j++) {
    array.push(j)
}

function fizzBuzz(arr){
    for (let i = 0; i < arr.length; i++){
        if (((Math.floor(arr[i]) % Math.floor(3)) === Math.floor(0) && (Math.floor(arr[i]) % Math.floor(5)) === Math.floor(0))){
            arr[i] = "Fizz Buzz"
        } else if ((Math.floor(arr[i]) % Math.floor(3)) === Math.floor(0)){
            arr[i] = "Fizz"
        } else if ((Math.floor(arr[i]) % Math.floor(5)) === Math.floor(0)){
            arr[i] = "Buzz"
        }
    } return console.log(arr)
}

fizzBuzz(array)
//

// № 2
function fizzBuzz (n) {
    const answer = []

    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0)
            answer.push("FizzBuzz")
        else if (i % 3 == 0)
            answer.push("Fizz")
        else if (i % 5 == 0)
            answer.push("Buzz")
        else
            answer.push(i.toString())
    }

    return answer
};
console.log(fizzBuzz(100));
//

// № 3
const FizzBuzz = n => ({
    true: n,
    [ n % 5 === 0]: "Buzz",
    [ n % 3 === 0]: "Fizz",
    [ n % 15 === 0]: "FizzBuzz",
    [ n === 0 ]: 0,
}).true

const ThisIsAFizzBuzz = n => [...Array(n).keys()].forEach(n => console.log("Result: ", FizzBuzz(n)))
ThisIsAFizzBuzz(100)
//
