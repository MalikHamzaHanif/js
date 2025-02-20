// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (true === true) {
//             console.log("resolving the promise");

//             resolve("resolved with some data");
//         } else {
//             console.log("rejecting the promise");
//             reject("something went wrong");
//         }
//     }, 2000);
// });

// promiseOne.then((data)=>{
//     console.log(data);

// }).catch((e)=>{
//     console.log("some error");

// }).finally(()=>{console.log("promise any how resolved or rejected");
// })


// const promiseTwo=new Promise((resolve ,reject)=>{
//    const data= fetch("https://jsonplaceholder.typicode.com/todos");
//    resolve(data);
// })


// promiseTwo.then((data)=>{
//     console.log(data);

//     // return new Promise((resolve, reject) => {
//     //     resolve(data.json());
//     // })

//     return data.json()

// }).then((data)=>{
//     console.log(data);

// })



async function getData() {
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/todos");
        const todo = await data.json();
        console.log(todo);
        return todo;
    } catch (e) {
        console.log(e);

    }


}

// getData()


function getDataTwo() {
   return fetch("https://jsonplaceholder.typicode.com/todos");
   //returning promise
}

getDataTwo().then((data)=>{
    // console.log(data);
    return data.json()
    //returning another promise
}).then((data)=>{
    console.log(data);
    
})
