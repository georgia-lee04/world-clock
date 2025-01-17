function updateTime() {

let losAngelesElement = document.querySelector("#los-angeles")
let losAngelesDateElement = losAngelesElement.querySelector(".date")
let losAngelesTimeElement = losAngelesElement.querySelector(".time")
let losAngelesTime = moment().tz("America/Los_Angeles")


losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY")
losAngelesTimeElement.innerHTML = losAngelesTime.format("hh:mm:ss [<small>]A[</small>]")


let parisElement = document.querySelector("#paris")
let parisDateElement = parisElement.querySelector(".date")
let parisTimeElement = parisElement.querySelector(".time")
let parisTime = moment().tz("Europe/Paris")


parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY")
parisTimeElement.innerHTML = parisTime.format("hh:mm:ss [<small>]A[</small>]")



let londonElement = document.querySelector("#london")
let londonDateElement = londonElement.querySelector(".date")
let londonTimeElement = londonElement.querySelector(".time")
let londonTime = moment().tz("Europe/London")


londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY")
londonTimeElement.innerHTML = londonTime.format("hh:mm:ss [<small>]A[</small>]")
}

function updateCity(event) {
    let cityTimeZone = event.target.value
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone)
    let citiesElement = document.querySelector("#cities")
    citiesElement.innerHTML = `<div class="city">
    <div>
<h2>${cityTimeZone}</h2>
<div class="date">${cityTime.format("MMMM Do YYYY")}</div>
</div>
<div class="time">${cityTime.format("hh:mm:ss")}<small>${cityTime.format("A")}</small></div>`
}

updateTime()
setInterval(updateTime, 1000)


let citiesSelectElement = document.querySelector("#city")

citiesSelectElement.addEventListener("change", updateCity)