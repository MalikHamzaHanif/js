function Closure(){
    let age=90;

    function printAge(){
        console.log(age);
        
    }

    return printAge;
}


let x=Closure()
x()