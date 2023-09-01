const form = document.getElementById("location-form");
const locationInput = document.getElementById("location-input");
const weatherInfo = document.getElementById("weather-info");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const location = locationInput.value;

    // Fetch weather data from API using location
    fetch(https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${location})
        .then(response => response.json())
        .then(data => {
            const weather = data.current.condition.text;
            const temperature = data.current.temp_c;

            // Display weather information
            weatherInfo.innerHTML = Current weather in ${location}: ${weather}, Temperature: ${temperature}°C;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            weatherInfo.innerHTML = "Failed to fetch weather data";
        });
});