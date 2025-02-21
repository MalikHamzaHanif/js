function createUser(name,age){
    this.name=name;
    this.age=age;
    // return this;
}


let userOne=createUser("hamza",45);
let userTwo=new createUser("ali",78);
console.log(userOne);
console.log(userTwo);
console.log(createUser.prototype);

createUser.prototype.printName=function(){
    console.log(this.name);
    
}

userTwo.printName()



