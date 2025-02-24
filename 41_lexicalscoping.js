// function setSomething(){
//     this.teacher="teach"
// }
// function userData(namee, age) {
//     this.name = namee;
//     this.age = age;
//     let intOne = 45;


// this.printUserInformation=function getdata(){
//     console.log(this.name);
//     setSomething.call(this);
//     this.dpt="cs"
    
    
// }
// this.printUserInformation()
// console.log(this.teacher);

// console.log(this.dpt);

// console.log(this.intOne);

//     function printUserName() {
//         console.log(this.name);
//         // console.log(name);
//         console.log(intOne);
        
//         let intTwo=56;
//         let getIntTwoValue=()=>{
//             console.log("printing");
//             console.log(this.intTwo);
//             console.log(this.intOne);
//             console.log("printing stopped");
            
//         }
//         getIntTwoValue()

//         // this.checkOne = false;
//         // function printUserAge() {
//         //     console.log(this.age);
//         //     console.log(this.checkOne);

//         // }
//         // printUserAge()

//     }
//    let x= new printUserName();
// }


// let x=new userData("hamza", 34)
// console.log(x.dpt);

// console.log(global.age);

// let age=()=>{
//     console.log(this);
    
// }

// function ageTwo(){
//     console.log(this);
// }

// age()
// ageTwo()




function lex(){
    let age=45;

    function lexTwo(){
        console.log(age);
        
    }
    function lexThree(){
        console.log(age);
        // lexTwo()
    }

    // lexTwo()
    lexThree()
}

lex()