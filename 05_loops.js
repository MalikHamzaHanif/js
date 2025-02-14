for (var i = 0; i < 10; i++) {
    console.log(i);

}

let x = 0;

while (x < 10) {
    console.log(x);
    x++;

}

do {
    console.log(x);//10 will be printed b/c of do while
    x++;
} while (x < 10)
console.log(x);//11 atleast one time it will enter loop

let obj = {
    name: "hamza",
    age: 34,
    p_no: 453356
}

for (var i in obj) {
    console.log(i);
}
for (var i in obj) {
    console.log(obj[i]);

}

// for(var i of obj){
//     console.log(i);
// } throw error b/c this loop is for arrays etc

let arr = [122, 123, 124, 125, 126];

for (var i of arr) {
    console.log(i);

}

for (var i in arr) {
    console.log(i);//print the indexes
}

for(var i in arr){
    console.log(arr[i]);//print the actual value
    
}
//for each loop
arr.forEach((e)=>{
console.log(e);
});

arr.forEach(function (e){
    console.log(e);
})
