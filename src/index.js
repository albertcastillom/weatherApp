// key=Q5J5VVK74FADGKEMEB3S6PNGP
import "./styles.css";

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
        const proccesedData =  processData(weatherData);
        return proccesedData;
    } catch(err){
        console.log(err);
    }
}


const form = document.querySelector("#addy");
form.addEventListener("submit", async (event)=>{
    event.preventDefault();
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    let weather = await getWeather(`${city}, ${state}`);
    renderWeather(weather);
    
});

let renderWeather = function(object){
    let tempPara = document.querySelector("#Temp");
    tempPara.textContent = `Temperature: ${object.temp}`;
    let cityPara = document.querySelector("#City");
    cityPara.textContent = `Location: ${object.city}`;
    let precipPara = document.querySelector("#Precip");
    precipPara.textContent = `Precipitation: ${object.precip}`;
    let condsPara = document.querySelector("#cond");
    condsPara.textContent = `Conditions: ${object.conditions}`;
};

let defData = await getWeather("New York, NY");

renderWeather(defData);



