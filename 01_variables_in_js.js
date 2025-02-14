var nameOne = "hamza";
var nameOne = 123;
// let nameOne="ali"; not allowed 
console.log(nameOne);
{
    let nameOne = "ali";
    console.log(nameOne);

}
console.log(nameOne);

let nameTwo="ali rehman khan";
nameTwo="i am name two";
console.log(nameTwo);

// let nameTwo="one"; not allowed


const age=13;
// age=45; not allowed b/c constant
console.log(age);

//scope

let userAge=45;

{
    // var userAge=45; not allowed b/c  it get hoisted on top its function or global context 
    console.log(userAge);
    
}


var nameThree="hamza";

{
    var nameThree="ali ";
}
console.log(nameThree);//ali will be printed not like above case ..where let was used .. 




