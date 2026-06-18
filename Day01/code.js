// Variables
/*
Hi All
I hope you
are learning something Good
*/

// console.log("My name is Vaibhav")

// // let, const, var 

// let name = "Vaibhav";
// console.log(name)
// name = "Arde"
// console.log(name)

// const city = "Mumbai"
// console.log(city)
// city = "Pune"
// console.log(city)

// let test;
// console.log(test);
// console.log(typeof test);

// test = null;
// console.log(test);
// console.log(typeof test);

//  Data Types


// Operators
// Logical Operator : &&, ||, ! 

// Arithmatic Operator : +, -, *, /, %, ++, --  
// Assignment Operator : =, +=, -=, *=, /=, %=, ++, --  
// Comparison Operator : ==, ===, !=, !==, >, <, >=, <=  

// let a = 5
// let b = "5"

// console.log(a == b)  //it will print true because it will compare the values but not the types
// console.log(a === b) //it will print false because it will compare the values and the types

// // Conditioanl STatements
// if (a == b) {
//     console.log("True")
// } 

// if (a == b) {
//     console.log("True")
// } else {
//     console.log("False")
// }

// let marks = 70

// if (marks >= 75) {
//     console.log("Grade A")
// } else if (marks >= 60) {
//     console.log("Grade B")
// } else if (marks >= 50) {
//     console.log("Grade C")
// } else {
//     console.log("Grade F")
// }


// if (marks >= 50) {
//     console.log("Grade A")
// } else if (marks >= 60) {
//     console.log("Grade B")
// } else if (marks >= 75) {
//     console.log("Grade C")
// } else {
//     console.log("Grade F")
// }



// let day = "Monday";

// switch (day) {
//     case "Monday":
//         console.log("Start of week");
//         break;

//     case "Friday":
//         console.log("Weekend is near");
//         break;

//     default:
//         console.log("Normal day");
// }

// Loops:

// for loop

// for (let i = 10; i >= 0; i--) {
//     console.log(i)
// }

// while loop
// let i = 10
// while (i >= 0) {
//     console.log(i)
//     i--
// }

// do while

// let j = -10
// do {
//     console.log(j)
//     j--
// } while (j >= 0)

// // while true
// while (true) {
//     console.log("Hello World")
// }

// function

function add(a, b) {
    return a + b
}

// console.log(add(5, 10))

// addition = add(5, 10)
// console.log(addition)


// function sub(a, b) {
//     console.log(a + b)
// }

// console.log(sub(10, 20))

// Array
// let arr = [1, 2, 3, 4, 5, "Vaibhav", true]
// arr.push(6)
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.shift()
// console.log(arr)
// arr.unshift(0)
// console.log(arr)

// let fruits = ["Apple", "Banana", "Orange"];
// fruits.splice(1, 0, "Mango");
// console.log(fruits);

// fruits.splice(1, 2);
// console.log(fruits);

// Object
let student = {
    name: "Vaibhav",
    age: 25,
    city: "Mumbai"
}
console.log(student)
console.log(student.name)
console.log(student.age)
console.log(student.city)
student.city = "Kolhapur"
console.log(student)

// // Array of objects
let students = [
    {
        name: "Vaibhav",
        age: 25,
        city: "Mumbai"
    },
    {
        name: "Arde",
        age: 26,
        city: "Pune"
    }
]
console.log(students)
console.log(students[0].name)
