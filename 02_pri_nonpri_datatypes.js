//primative datatypes

//stirng , number , boolean , symbol , bigint , null , undefined 

//non primative datatypes 

//objects 

var userInfo={
    name:"hamza",
    age:13,
    p_No:1333
}
console.log(userInfo);

userInfo.age=45;
console.log(userInfo);

let nameOfTheUser="hamza";

nameOfTheUser="hamza malik";
console.log(nameOfTheUser);

/*
The value of `nameOfTheUser` appears to change even though strings are primitive and immutable.
How?

Because, in terms of memory, the actual value is not modified in place.
Instead, a new string `"hamza malik"` is created in memory, and `nameOfTheUser` is updated to reference this new value.
The old string `"hamza"` remains in memory temporarily but will later be removed by the garbage collector.

This behavior is different from objects, which are mutable and can be updated in place.
*/


let otherUser=userInfo;

console.log(userInfo);
console.log(otherUser);
//changing other user value it will change userinfo as its reference is passed to otheruser

otherUser.name="i am a new name ";

console.log(userInfo);
//see userInfo is changed as well

// but in case of primarive datatypes 
let wickets=4;
let playerOneWickets=wickets;
playerOneWickets=45;
console.log(wickets);
/*
wickets value is not changed because its copy is passed to `playerOneWickets` in terms of memory,  
not the reference.  
Primitive data types (like numbers, strings, and booleans) are stored directly in memory,  
so when we assign `wickets` to `playerOneWickets`, a new copy of the value is created.  
Modifying `playerOneWickets` does not affect the original `wickets` variable.  

However, for objects (which are non-primitive), assigning `userInfo` to `otherUser`  
creates a reference to the same object in memory.  
Thus, modifying `otherUser` also affects `userInfo` since they both point to the same memory location. */



