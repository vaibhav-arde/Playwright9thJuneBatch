// Scope
// 1. Global Scope
// 2. Function Scope
// 3. Block Scope
// 4. Lexical Scope

// let company = "Sarathi AI Labs";

// function displayCompany() {
//     console.log(company);
// }

// displayCompany();
// console.log(company);

// function login() {
//     var username = "admin";
//     console.log(username);
// }

// login();

// console.log(username);

// if (true) {
//     let message = "Hello";
//     console.log("In block", message);
// }

// console.log("Ouside Block", message); 

// Lexical Scope**

// let company = "Sarathi AI Labs";

// function outer() {
//     let batch = "Playwright AI";
//     function inner() {
//         console.log(company);
//         console.log(batch);
//     }
//     inner();
// }

// outer();

// //Closures:
// function outer() {
//     let count = 0;
//     function inner() {
//         count++;
//         console.log(count);
//     }
//     return inner;
// }

// const increment = outer();

// increment();
// increment();
// increment();

// // Practical Example
// function createLogger(testName) {

//     return function (message) {
//         console.log(`[${testName}] ${message}`);
//     };
// }

// const loginLogger = createLogger("Login Test");

// loginLogger("Started");
// loginLogger("Completed");
// // ---

// // Classes
// class Employee {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//     }
//     work() {
//         console.log(`${this.name} is working`);
//     }
// }

// const emp1 = new Employee("Vaibhav", 7);
// emp1.work();
// console.log(emp1.name);
// console.log(emp1.id);

// const emp2 = new Employee("Manoj", 16);
// emp2.work();
// console.log(emp2.name);
// console.log(emp2.id);

// // Objects
// const loginPage = new LoginPage(page);
// await loginPage.login("admin", "admin123");

// // Encapsulation
// class BankAccount {
//     #balance = 1000;
//     deposit(amount) {
//         this.#balance += amount;
//     }
//     getBalance() {
//         return this.#balance;
//     }
// }

// const account = new BankAccount();
// account.deposit(500);
// console.log(account.getBalance());

// // Inheritance
// class Animal {
//     eat() {
//         console.log("Eating...");
//     }
// }

// // class Dog1{
// //     bark() {
// //         console.log("Barking...");
// //     }
// //     eat() {
// //         console.log("Eating...");
// //     }
// // }

// class Dog extends Animal {
//     bark() {
//         console.log("Barking...");
//     }
// }

// const dog = new Dog();

// dog.eat();
// dog.bark();

// // Practical example
// class BasePage {
//     constructor(page) {
//         this.page = page;
//     }

//     async navigate(url) {
//         await this.page.goto(url);
//     }
// }

// class LoginPage extends BasePage {

//     async login(user, pass) {
//         await this.page.fill("#username", user);
//         await this.page.fill("#password", pass);
//     }
// }
// --

// // Polymorphism
// class Animal {
//     sound() {
//         console.log("Animal Sound");
//     }
//     eat() {
//         console.log("Eating...");
//     }
// }

// class Dog extends Animal {
//     sound() {
//         console.log("Bark");
//     }
// }

// class Cat extends Animal {
//     sound() {
//         console.log("Meow");
//     }
// }

// new Dog().sound();
// new Cat().sound();
// new Dog().eat();
// new Cat().eat();

// // Abstraction
// class CoffeeMachine {

//     makeCoffee() {
//         this.#boilWater();
//         this.#brewCoffee();
//         console.log("Coffee Ready");
//     }

//     #boilWater() {
//         console.log("Boiling Water");
//     }

//     #brewCoffee() {
//         console.log("Brewing Coffee");
//     }
// }

// const machine = new CoffeeMachine();

// machine.makeCoffee();


// class BankAccount {

//     balance = 1000;

//     getBalance() {
//         return this.balance;
//     }
// }

// const account = new BankAccount();

// console.log(account.getBalance());


// // STatic Properties:
// class Company {

//     static companyName = "Sarathi AI Labs";
// }

// console.log(Company.companyName);


// class Config {
//     static BASE_URL = "https://staging.app.com";
// }
// await page.goto(Config.BASE_URL);

// getter
// class Employee {

//     constructor(name) {
//         this.name = name;
//     }

//     get employeeName() {
//         return this.name;
//     }
// }

// const emp = new Employee("Vaibhav");

// console.log(emp.employeeName);

// // setters:
// class Employee {

//     set employeeName(value) {
//         this.name = value;
//     }
// }

// const emp1 = new Employee();

// emp1.employeeName = "Vaibhav";

// console.log(emp1.name);


// // Super
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Dog extends Animal {
//     constructor(name) {
//         super(name);
//     }
// }

// const dog = new Dog("Tommy");

// console.log(dog.name);

// // Promises:
// const promise = new Promise((resolve, reject) => {
//     let success = true;

//     if (success) {
//         resolve("Login Successful");
//     } else {
//         reject("Login Failed");
//     }
// });

// promise
//     .then(result => console.log(result))
//     .catch(error => console.log(error));


// fetch("/users")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// // Async / Await
// async function getUsers() {
//     const response = await fetch("/users");
//     const data = await response.json();
//     console.log(data);
// }

// test("Login Test", async ({ page }) => {

//     await page.goto("https://example.com");

//     await page.fill("#username", "admin");

//     await page.click("#login");
// });


// Error Handling

try {
    let result = 10 / a;
    console.log(result);
} catch (error) {
    console.log("Error handled successfully");
    // console.log(error);
}



try {
    console.log("Testing");

} catch(error) {
    console.log(error);

} finally {
    console.log("Cleanup");
}

// ---
try {
    await page.goto(url);
} finally {
    await browser.close();
}
// 


// Modular Programming (Import / Export)

