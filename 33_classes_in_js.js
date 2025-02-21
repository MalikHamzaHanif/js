// function add() {
//     let username = "alie";
//     console.log(this.username);
//     console.log(this);

//     function two() {
//         console.log(this.username);

//     }
//     two()
// }
// add();

// var hamza="ali";

// let userInformation = {
//     name: "hamza",
//     age: 24,
//     printValue:  ()=> {
//         console.log(this.hamza);

//     }
// }

// let usertwo={
//     myname:"ali rehman khan",
//     user:userInformation
// }
// ........................................................................................

function getUser(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
    // console.log(this);

    return this
}


// getUser('hamza',23,455555)


let userOne = {
    name: "ali",
    getUser: function () {
        console.log(this);

    }
}
// userOne.getUser()



// let userNoOne=getUser("ali",45,67777)
// console.log(userNoOne);
// let userNoTwo=getUser("hamza",78,788)
// console.log(userNoTwo);
// console.log(userNoOne);
let userNoOne = new getUser("ali", 45, 67777)
console.log(userNoOne);
let userNoTwo = new getUser("hamza", 78, 788)
console.log(userNoTwo);
console.log(userNoOne);






// ........................................................................................
// console.log(this);
// // Output: `window` (global object in browsers)
// console.log(this);
// // Output: `{}` (empty object in modules)
// function showThis() {
//     console.log(this);
// }
// showThis();
// // In browsers: `window`
// // In Node.js: `global`
// let user = {
//     name: "Hamza",
//     greet: function () {
//         console.log(this.name);
//     }
// };
// user.greet();
// // Output: "Hamza"
// let user = {
//     name: "Hamza",
//     greet: () => {
//         console.log(this.name);
//     }
// };
// user.greet();
// // Output: `undefined` (because `this` is not `user`, but the global object)
// let user = {
//     name: "Hamza",
//     greet: function () {
//         function innerFunction() {
//             console.log(this);
//         }
//         innerFunction();
//     }
// };
// user.greet();
// // Output: `window` (or `undefined` in strict mode)
// let user = {
//     name: "Hamza",
//     greet: function () {
//         const innerFunction = () => {
//             console.log(this.name);
//         };
//         innerFunction();
//     }
// };
// user.greet();
// // Output: "Hamza"
// let person = { name: "Ali" };

// function sayHello() {
//     console.log("Hello, " + this.name);
// }

// sayHello.call(person); // Output: "Hello, Ali"
// let boundFunction = sayHello.bind(person);
// boundFunction();
// // Output: "Hello, Ali"
// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     sayName() {
//         console.log(this.name);
//     }
// }

// let p = new Person("Hamza");
// p.sayName();
// // Output: "Hamza"

