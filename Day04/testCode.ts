// function addition(a: number, b: number) {
//     return a + b
// }

// let num1 = 2;
// let num2 = 3;

// console.log(addition(num1, num2))
// console.log(typeof (addition(num1, num2)))

// let name1: string = "Vaibhav";
// let age: number = 35;
// let isActive: boolean = true;

// let users: string[] = ["admin", "manager"];
// let users1 = ["admin", "manager"];

// interface userLogin {
//     name: string;
//     age: number;
// }

// let user: userLogin = {
//     name: "Vaibhav",
//     age: 35
// };

// let user1 = {
//     name: "Manoj",
//     age: 28
// }

// let baseUrl: string =
//     "https://staging.app.com";

// // await page.goto(baseUrl);

// // Interfaces
// interface User {
//     username: string;
//     password: string;
// }

// // Enums
// let role1 = "Admin";
// let role2 = "admn";

// enum UserRole {
//     ADMIN = "admin",
//     MANAGER = "manager",
//     CUSTOMER = "customer"
// }
// let userRole = UserRole.ADMIN

// enum Environment {
//     DEV = "https://dev.app.com",
//     STAGING = "https://staging.app.com",
//     PROD = "https://app.com"
// }

// let currentEnvironment = Environment.DEV

// Generics

// function addition(a: number, b: number) {
//     return a + b
// }
// console.log(addition(10, 20));

// function addString(a: string, b: string) {
//     return a + b
// }

// console.log(addString("Vaibhav", "Arde"))

function concateTwo<T, U>(a: T, b: U): T | U {
    return a as any + (b as any)
}

console.log(concateTwo(10, 20))
console.log(concateTwo("Vaibhav", "Arde"))

let value: unknown =
    "Vaibhav";

let name1 = value as string;

console.log(name1.length);

let name2 = <string>value;

// const title = await page.title() as string;
// console.log(title.length);


// Utility Types :

interface User {
    username: string;
    password: string;
}

// let user1: User = {
//     username: "admin",
//     password: "Test"
// }

const user: Partial<User> = {
    username: "admin",
    // name: "Vaibhav"
};

interface User1 {
    username?: string;
    password?: string;
    nickname: string
}

let user2: User1 = {
    username: "Vaibhav",
    nickname: "Test"
}

// let user3: Required<User1> = {
//     nickname: "Test",
//     username: "Vaibhav",
//     // password : "password"
// }

interface User {
    username: string;
    password: string;
    nickName: string;
}

type LoginUser = Pick<User, "username" | "password">;

type PublicUser = Omit<User, "password">;

let cred: LoginUser = {
    username: "Vaibhav",
    password: "password"
}