const apiKey = 'a3cd82ce320ca5684703da7c43a692d1';  // Your API key
const units = 'metric'; // Metric for Celsius

// Function to fetch and display weather data for a given city
async function fetchWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`);
    
    if (response.ok) {
        const data = await response.json();
        
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const weatherCondition = data.weather[0].main.toLowerCase();
        const dateTime = new Date().toLocaleString();

        document.getElementById('city').textContent = city;
        document.getElementById('temp').textContent = temperature;
        document.getElementById('weather-description').textContent = description;
        document.getElementById('date-time').textContent = dateTime;

        updateBackground(weatherCondition);
    } else {
        alert('City not found. Please try again.');
    }
}

// Function to update background based on weather condition
function updateBackground(condition) {
    const body = document.body;

    if (condition.includes('clear')) {
        body.className = 'sunny';
    } else if (condition.includes('cloud')) {
        body.className = 'cloudy';
    } else if (condition.includes('rain')) {
        body.className = 'rainy';
    } else if (condition.includes('snow')) {
        body.className = 'snowy';
    } else {
        body.className = '';
    }
}

// Function to search for weather by city
function searchWeather() {
    const cityInput = document.getElementById('city-input').value;
    if (cityInput.trim()) {
        fetchWeather(cityInput);
    } else {
        alert('Please enter a city name.');
    }
}
