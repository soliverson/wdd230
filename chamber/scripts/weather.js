//get the elements from the information card that is related to the weather
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#description");
const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");


// define the api url using my city's data
const url = "https://api.openweathermap.org/data/2.5/weather?lat=43.49167819115109&lon=-112.04504114166237&units=imperial&appid=4f403cd0a70e67dbfb9292cb3f7b0933";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=43.49167819115109&lon=-112.04504114166237&units=imperial&appid=4f403cd0a70e67dbfb9292cb3f7b0933";


async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            //console.log(data);
            displayResults(data);
        } else{
            throw Error(await response.text());
        }
    } catch (error){
       // console.log(error);
    }
}
function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = ` ${data.weather[0].description}` ;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", data.weather[0].main );
    captionDesc.textContent = `${desc}`;
}

async function forecastFetch(){
    try{
        const forecastResponse = await fetch(forecastUrl);
        if (forecastResponse.ok){
            const forecastData = await forecastResponse.json();
            displayForecastResults(forecastData);
        } else{
            throw Error(await forecastResponse.text());
        }
    } catch (error){
       // console.log(error);
    }
}
function displayForecastResults(forecastData){
    let currentDate = new Date().toLocaleDateString();
    let firstIndex = 0;
    let secondIndex = 0;
    let thirdIndex = 0;
    let date1;
    let date2;
    let date3;
    let maxTemp1 = -200;
    let minTemp1 = 200;
    let maxTemp2 = -200;
    let minTemp2 = 200;
    let maxTemp3 = -200;
    let minTemp3 = 200;

    //get next days first indexes
    for (let i = 0; i<forecastData.list.length; i++){
        let date = new Date(forecastData.list[i].dt_txt).toLocaleDateString();
        if (currentDate != date){
            firstIndex = i;
            secondIndex = firstIndex + 8;
            thirdIndex = secondIndex + 8
            break;
        }
    };
    // first forecast day code
    for (j = firstIndex; j<secondIndex; j++){
        let date = new Date(forecastData.list[j].dt_txt).toLocaleDateString();
        let maxTemp = forecastData.list[j].main.temp_max;
        let minTemp = forecastData.list[j].main.temp_min;
        if(maxTemp > maxTemp1){
            maxTemp1 = maxTemp;
        }
        if (minTemp < minTemp1){
            minTemp1 = minTemp
        }
        date1 = date;
    };
    const firstForecastDay = document.createElement('h3');
    const forecastMaxTemp = document.createElement('p');
    const forecastMinTemp = document.createElement('p');
    firstForecastDay.textContent = date1;
    forecastMaxTemp.innerHTML = `High: ${maxTemp1}&deg;F`;
    forecastMinTemp.innerHTML = `Low: ${minTemp1}&deg;F`;
    day1.appendChild(firstForecastDay);
    day1.appendChild(forecastMaxTemp);
    day1.appendChild(forecastMinTemp);

    // second forecast day code
    for (k = secondIndex; k<thirdIndex; k++){
        let date = new Date(forecastData.list[k].dt_txt).toLocaleDateString();
        let maxTemp = forecastData.list[k].main.temp_max;
        let minTemp = forecastData.list[k].main.temp_min;
        if(maxTemp > maxTemp2){
            maxTemp2 = maxTemp;
        }
        if (minTemp < minTemp2){
            minTemp2 = minTemp
        }
        date2 = date;
    };
    const secondForecastDay = document.createElement('h3');
    const forecastMaxTemp2 = document.createElement('p');
    const forecastMinTemp2 = document.createElement('p');
    secondForecastDay.textContent = date2;
    forecastMaxTemp2.innerHTML = `High: ${maxTemp2}&deg;F`;
    forecastMinTemp2.innerHTML = `Low: ${minTemp2}&deg;F`;
    day2.appendChild(secondForecastDay);
    day2.appendChild(forecastMaxTemp2);
    day2.appendChild(forecastMinTemp2);

    // third forecast day code
    for (l = thirdIndex; l<thirdIndex +7; l++){
    let date = new Date(forecastData.list[l].dt_txt).toLocaleDateString();
    let maxTemp = forecastData.list[l].main.temp_max;
    let minTemp = forecastData.list[l].main.temp_min;
    if(maxTemp > maxTemp3){
        maxTemp3 = maxTemp;
    }
    if (minTemp < minTemp3){
        minTemp3 = minTemp
    }
    date3 = date;
    };
    const thirdForecastDay = document.createElement('h3');
    const forecastMaxTemp3 = document.createElement('p');
    const forecastMinTemp3 = document.createElement('p');
    thirdForecastDay.textContent = date3;
    forecastMaxTemp3.innerHTML = `High: ${maxTemp3}&deg;F`;
    forecastMinTemp3.innerHTML = `Low: ${minTemp3}&deg;F`;
    day3.appendChild(thirdForecastDay);
    day3.appendChild(forecastMaxTemp3);
    day3.appendChild(forecastMinTemp3);
    
 

}



apiFetch();
forecastFetch();