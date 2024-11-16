const apiKey = '55a9fcb17a5842e1a9b103756240911';
const baseUrl = 'https://api.weatherapi.com/v1/current.json?';

document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    
    const url = `${baseUrl}key=${apiKey}&q=${city}&aqi=no`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('weatherResult').innerHTML = `<p>${data.error.message}</p>`;
                return;
            }

            const location = data.location.name;
            const temp = data.current.temp_c;
            const condition = data.current.condition.text;
            const humidity = data.current.humidity;
            const wind = data.current.wind_kph;

            document.getElementById('weatherResult').innerHTML = `
                <h3>Weather in ${location}</h3>
                <p>Temperature: ${temp}°C</p>
                <p>Condition: ${condition}</p>
                <p>Humidity: ${humidity}%</p>
                <p>Wind Speed: ${wind} kph</p>
            `;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `<p>Error fetching weather data.</p>`;
            console.error("Error:", error);
        });
})