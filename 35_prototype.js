let arr=[11,22,33,44]

function getUserName(name){
    this.name=name
}


let user={
    name:"hamza",
    age:45
}


Object.prototype.printHamza=function (){
    console.log("hamza is present everywhere");
    
}


user.printHamza()
getUserName.printHamza()
arr.printHamza()


Array.prototype.onlyWithArray=function(){
    console.log("only array can access me");
    
}


arr.onlyWithArray()

// getUserName.onlyWithArray() this line will throw error


let animal={
    type:"animal",
    legs:4
}


let cat={
    name:"cat",
    age:3,
    __proto__:animal
}

let dog={
    name:"dog",
    age:45
}

// dog.__proto__=animal

console.log(cat.type);
console.log(cat.age);
console.log(cat.legs);
// console.log(dog.legs);

Object.setPrototypeOf(dog,animal)
console.log(dog.legs);


let sentence="i am hamza and i am busy rn                         "


String.prototype.trimAndPrintLength=function(){
    return this.trim().length;
}


console.log(sentence.trimAndPrintLength());
let sentenceTwo="hi                        "

console.log(sentenceTwo.trimAndPrintLength());

