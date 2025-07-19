let cityName = document.getElementById("city");
let temp = document.getElementById("temperature");
let condition = document.getElementById("description");
let inputCity = document.getElementById("search-city");
let cityBtn = document.getElementById("cityBtn");
let wind = document.getElementById("wind");
let humidity = document.getElementById("humidity");

cityBtn.onclick = function takeCityName(){
    if(inputCity == ""){
        alert("Enter the city name");
        return  ;
    }
    let newInputString = inputCity.value.replace(/\s/g, '').trim();
    cityName.textContent = inputCity.value;
            

    weatherInformation();

}

async function weatherInformation( ) {

    try {
          let weather =  await fetch(`https://wttr.in/${cityName.innerText}?format=j1`);
    let data = await weather.json();
    console.log(data)

    temp.textContent =  data.current_condition[0].temp_C ;
    condition.textContent = data.current_condition[0].weatherDesc[0].value;
    humidity.textContent = data.current_condition[0].humidity;
    wind.textContent = data.current_condition[0].windspeedKmph;
    } catch (error) {
        
    }
  
}

 
