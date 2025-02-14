let arr=[23,24,25,26,27,28]

console.log(arr);
console.log(arr.length);
console.log(arr.includes(27));
console.log(arr.reverse());
console.log(arr.sort((a,b)=>a-b));
console.log(arr.concat([56,57,58]));
console.log(arr.push(90));
console.log(arr);
console.log(arr.pop());
console.log(arr);

console.log(arr.unshift(111));
console.log(arr);

console.log(arr.shift());
console.log(arr);

console.log(arr.toString());

console.log(arr.join("-Cui-Atd "));


let sliceArray=arr.slice(0,4);
console.log(arr);
console.log(sliceArray);

let spliceArray=arr.splice(0,3,1111,2222,3333,4444,5555,6666,7777)
console.log(spliceArray);
console.log(arr);

let stringSentence="hiiiii i am stirnt"

let arrayFromString=Array.from(stringSentence)
console.log(arrayFromString);


arr=[11,22,333,444,555,66,77,88]


let newArray=arr.map((e)=>{
    return `Sp21-bcs-0${e}`;
    
})

console.log(newArray);

let filterArray=arr.filter((e)=>{
    return e<78;
})

console.log(filterArray);


let reduceArray=arr.reduce((a,b)=>{
    return a+b;
})

console.log(reduceArray);















