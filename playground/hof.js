// hof - higher order function 
// a function which takes a function as an argument or a function that returns a function as a value is called as a higher order function

// callback function - the function which is being passed as an argument to another function is called a callback function

// a function which takes another function as an argument 
/*
forEach, filter, find, map, addEventListener, then
*/

// a function that returns a function as a value 
function sum(n) {
    const m = 100
    n = n % 2 == 0 ? n : 0
    return (a,b) => {
        return a + b + n + m
    }
}
console.log(sum(5)(10,15)) // 25
console.log(sum(2)(10, 15)) // 27

// function add(a,b) {
//     return a + b
// }
// console.log(add(10,20)) // 30