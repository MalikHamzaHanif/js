async function getTodosData() {
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/todos");
        const todos = await data.json();
        console.log(todos);

    } catch (error) {
        console.log(error);

    }

}

// getTodosData()


async function postReq() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        headers: {
            "Content-type": "application/json; charset=UTF-8",

        },
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 2,
        }),
        method: "POST"
    })
    const data=await res.json()
    console.log(data);
    
}

postReq()