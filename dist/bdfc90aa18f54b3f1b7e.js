// key=Q5J5VVK74FADGKEMEB3S6PNGP
const weatherDiv = document.querySelector(".weather");

let processData = function(data){
 let object = {
    city: data.resolvedAddress,
    temp: data.currentConditions.temp,
    conditions: data.currentConditions.conditions,
    precip: data.currentConditions.precip,
 }
 return object;
}

async function getWeather(location){
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=Q5J5VVK74FADGKEMEB3S6PNGP`, {mode: 'cors'});
        const weatherData =  await response.json();
        console.log(weatherData);
        console.log(processData(weatherData));
    } catch(err){
        console.log(err);
    }
}

const form = document.querySelector("#addy");
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    getWeather(`Address: ${street}, ${city}, ${state}, ${zip}`);

});


