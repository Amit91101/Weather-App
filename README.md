

# Weather App

A simple and interactive weather app that allows users to check the weather of any city by fetching real-time data from the OpenWeatherMap API. The app displays the temperature, weather condition (like sunny, rainy, snowy), and adjusts the background and text styles dynamically based on the weather conditions and temperature.

## Features

- Search for weather by city name.
- Displays current temperature in Celsius.
- Updates background color and weather description dynamically based on weather conditions.
- Visual effects for temperature (hot and cold weather).
- Smooth transitions when switching between cities.

## Technologies Used

- **HTML**: Structure and layout of the web page.
- **CSS**: Styling and dynamic visual effects based on weather conditions.
- **JavaScript**: Fetching weather data from the OpenWeatherMap API and updating the DOM.
- **OpenWeatherMap API**: Provides real-time weather data.

## How to Run Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Open the `index.html` file** in your browser:
   - Simply double-click the `index.html` file to open it in your default browser.
   
   Alternatively, you can use a local server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in Visual Studio Code for live previewing.

## Setup API Key

To use the OpenWeatherMap API, you'll need to sign up on [OpenWeatherMap](https://openweathermap.org/) and obtain an API key.

1. Replace the `apiKey` variable in the JavaScript file with your API key:

   ```javascript
   const apiKey = 'your-api-key-here';  // Replace with your OpenWeatherMap API key
   ```

2. Save the file and you're ready to go!

## Usage

- Enter the name of a city in the input field.
- Click the "Search" button to fetch the weather data.
- The app will display the temperature, weather description, and adjust the background color based on the weather conditions.
  
## Screenshots

![Weather App Screenshot](screenshots/weather-app-screenshot.png)

## License

MIT License

```
MIT License

Copyright (c) 2024 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Acknowledgments

- [OpenWeatherMap API](https://openweathermap.org/) for providing the weather data.
- [FontAwesome](https://fontawesome.com/) for the icons.
- [Unsplash](https://unsplash.com/) for free background images (optional if you're adding background images).
- [Your Name] for developing this project.

---

### Additional Notes

1. **Replace placeholders**: Make sure to replace the following placeholders in the README:
   - `[Your Name]`: Replace with your name or username.
   - The link to your project repository (e.g., `https://github.com/your-username/weather-app.git`).
   - You can add a screenshot of the app in the **Screenshots** section.

2. **MIT License**: The MIT License included gives users the right to freely use, modify, and distribute the project. You can edit it as necessary, but the current version allows anyone to use it with minimal restrictions.
