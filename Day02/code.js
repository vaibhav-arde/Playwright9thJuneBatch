// let and const

// function add (a, b){
//     console.log(a + b)
// }

// let add = (a, b) => a + b
// console.log(add(10, 20))

// let sub = (a, b) => a - b
// console.log(sub(10, 20))


// let mul = (a, b) => a * b
// console.log(mul(10, 20))

// let div = (a, b) => a / b
// console.log(div(10, 20))

// let add1 = (a, b) => {
//     a + b
//     console.log(a + b)
//     return a + b
// }
// console.log(add1(10, 20))

// Template literal
// let name = "Vaibhav"
// let id = 7
// console.log("My name is : " + name)

// console.log(`My name is : ${name}, my id is ${id}`)

// Destructuring
// Destructuring of object
// let student = {
//     name: "Vaibhav",
//     age: 25,
//     city: "Mumbai"
// }
// let name = student.name
// let age = student.age
// let city = student.city

// let { name, age, city } = student
// console.log(name)
// console.log(age)
// console.log(city)

// let { name: firstName, age: yourAge, city: yourCity } = student
// console.log(firstName)
// console.log(yourAge)
// console.log(yourCity)

// Destructuring of Array
// let fruits = ["Apple", "Banana", "Orange"];

// let fruit = fruits[0]
// let secondFruit = fruits[1]
// let thirdFruit = fruits[2]

// let [fruit, secondFruit, thirdFruit] = fruits
// console.log(fruit)
// console.log(secondFruit)
// console.log(thirdFruit)

// let [fruit, , thirdFruit] = fruits
// console.log(fruit)
// console.log(thirdFruit)

// Skip 
// let [fruit, , thirdFruit] = fruits
// console.log(fruit)
// console.log(thirdFruit)

// Rest operator
// let [fruit, ...rest] = fruits
// console.log(fruit)
// console.log(rest)


// Spread Operator: 
// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]
// let arr3 = [arr1, arr2]

// console.log(arr3) // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
// let arr4 = [...arr1, ...arr2]
// console.log(arr4) // [ 1, 2, 3, 4, 5, 6 ]

// let obj1 = { name: "Vaibhav", age: 25 }
// let obj2 = { city: "Mumbai", id: 7 }
// let obj3 = { obj1, obj2 }
// console.log(obj3)
// let obj4 = { ...obj1, ...obj2 }
// console.log(obj4)

// Rest Operator
// function add(a, b, ...test) {
//     console.log(a + b)
//     console.log(test)
// }
// add(1, 2, 3, 4, 5, 6)
// // 3
// // [ 3, 4, 5, 6 ]

// Optional Chaining
// let student = {
//     name: "Vaibhav",
//     age: 25,
//     address: {
//         street: "123 Main St",
//         city: "Mumbai",
//         pincode: "123456"
//     }
// }

// console.log(student.address.city);
// console.log(student.address.housenumber);
// console.log(student.address?.housenumber);
// console.log(student?.address?.housenumber);

// map()

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let num2 = num.map(n => n * 2)
// console.log(num2)

// filter()

// let num3 = num.filter(n => n % 2 === 0)
// console.log(num3)
// let addnums = num.filter(n => n % 2 === 1)
// console.log(addnums)

// reduce()
//this is to get the adding of all numbers
let num4 = num.reduce((acc, curr) => acc + curr, 0)
console.log(num4)




