// function setUseName(name){
//     this.name=name;
// }
// function getUserData(name,id , age){
//     setUseName.call(this,name)
//     this.id=id;
//     this.age=age;
//     return this
// }


// const emp=  new getUserData("hamza",12,34);
// // const emptwo= new getUserData("ali",12,34);

// console.log(emp);
// // console.log(global.name);

// // console.log(emptwo);



// Object.prototype.setStringLength=function(){
//     return this.trim().length;
// }


// String.prototype.setStringLength=function(){
//     return this.trim().length;
// }
// console.log("this is hamza     ".setStringLength());


function setUseName(name){
    this.name=name;
}
function getUserData(name,id , age){
    setUseName.call(this,name)
    this.id=id;
    this.age=age;
    return this
}

function setTeacherData(name,id,age,domain){
    getUserData.call(this,name,id,age)
    this.domain=domain;
    return this;
}


let obj1=new setTeacherData("hamza",34,45,"cs")
console.log(obj1);



let Animal={
    type:"animal",
}

let cat={
    legs:2,
    sound:"meow meow",
    name:"cat",
    __proto__:Animal
}
let dog={
    legs:4,
    sound:"bark bark",
    name:"dog",
    __proto__:Animal
}

console.log(cat.type);
console.log(dog.legs);
console.log(dog.name);
console.log(dog.type);


let cow={
    legs:4,
    sound:"cow cow",
    name:"cow",
   
}


// cow.__proto__=Animal

Object.setPrototypeOf(cow,Animal);
console.log(cow.type);



class User{
    constructor(name,age,id){
        this.name=name;
        this.age=age;
        this.id=id;
    }
}




class Teacher extends User{
    constructor(name,age,id,domain){
          super(name,age,id);
          this.domain=domain;
    }
}


let tOne=new Teacher("hamza",23,45,"cs");
console.log(tOne);

