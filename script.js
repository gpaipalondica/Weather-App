let weather = {
    apiKey: "f5d4250491d2b982f22257ec43986850",
    
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            +city
            +"&units=imperial&appid=" 
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity, feels_like} = data.main;
        const {speed} = data.wind;
        
        // console.log("Hello")
        // console.log(name,icon,description,temp,humidity,speed)

        document.querySelector('.city').innerHTML = "Weather in "+name
        document.querySelector('.temp').innerHTML = temp+"°F"
        document.querySelector('.icon').src = "https://openweathermap.org/img/wn/"+icon+".png"
        document.querySelector('.description').innerHTML = description
        document.querySelector('.feels').innerHTML = "Feels like: "+feels_like+"°F"
        document.querySelector('.humidity').innerHTML = "Humidity: "+ humidity +"%"
        document.querySelector('.wind').innerHTML = "Wind Speed: "+speed+" mph"

        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+name+"')"
    },

    search: function() {
       let value2 = document.querySelector(".search-bar").value
        this.fetchWeather(value2)
    }
};


document.querySelector(".search-button").addEventListener("click", function() {
    weather.search()
})

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if(event.key == "Enter")
        weather.search()
})


