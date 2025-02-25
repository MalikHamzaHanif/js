const cities = [
    { city: "New York", temp: 22, windSpeed: 12, humidity: 65 },
    { city: "Los Angeles", temp: 28, windSpeed: 8, humidity: 50 },
    { city: "Chicago", temp: 18, windSpeed: 15, humidity: 72 },
    { city: "Houston", temp: 30, windSpeed: 10, humidity: 60 },
    { city: "Miami", temp: 32, windSpeed: 14, humidity: 80 },
    { city: "London", temp: 16, windSpeed: 20, humidity: 75 },
    { city: "Tokyo", temp: 26, windSpeed: 11, humidity: 68 },
    { city: "Paris", temp: 20, windSpeed: 9, humidity: 70 },
    { city: "Berlin", temp: 19, windSpeed: 13, humidity: 65 },
    { city: "Sydney", temp: 25, windSpeed: 10, humidity: 55 }
];



let input = document.getElementsByTagName("input")[0]
let second = document.getElementById("third");
let temp = second.firstElementChild
let city = second.lastElementChild
let humidity = document.getElementById("fourth-top-first").lastElementChild
let windSpeed = document.getElementById("fourth-top-second").lastElementChild
function startApp() {
    input.placeholder = cities[0]["city"]
    temp.innerHTML = `${cities[0]["temp"]} °C`
    city.innerHTML = cities[0]["city"]
    humidity.innerHTML = `${cities[0]["humidity"]} %`
    windSpeed.innerHTML = `${cities[0]["windSpeed"]} km/hr`
}

startApp()


document.getElementsByTagName("button")[0].addEventListener("click", () => {
    let cityFound = false;
    let input = document.getElementsByTagName("input")[0]
    let second = document.getElementById("third");
    let temp = second.firstElementChild
    let city = second.lastElementChild
    let humidity = document.getElementById("fourth-top-first").lastElementChild
    let windSpeed = document.getElementById("fourth-top-second").lastElementChild
    for (let i of cities) {

        if (i["city"] != input.value) {

        } else {
            console.log("here");
            console.log(i["city"]);

            cityFound = true;
            input.placeholder = i["city"]
            temp.innerHTML = `${i["temp"]} °C`
            city.innerHTML = i["city"]
            humidity.innerHTML = `${i["humidity"]} %`
            windSpeed.innerHTML = `${i["windSpeed"]} km/hr`
        }
    }

    if (!cityFound) {
        alert("No City Data");
    }


}

)
