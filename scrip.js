document.addEventListener("DOMContentLoaded", () => {
    const locationInput = document.getElementById("location");
    const searchButton = document.getElementById("search");
    const cityElement = document.getElementById("city");
    const temperatureElement = document.getElementById("temperature");
    const conditionElement = document.getElementById("condition");
    const dateElement = document.getElementById("date");

    const apiKey = 'fc243899da9656db0f4f8be4325580cc'; // Replace with your actual API key

    searchButton.addEventListener("click", () => {
        const location = locationInput.value;
        getWeatherData(location);
    });

    function getWeatherData(location) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                cityElement.textContent = data.name;
                temperatureElement.textContent = `${data.main.temp}°C`;
                conditionElement.textContent = data.weather[0].description;

                const currentDate = new Date();
                const day = currentDate.getDate();
                const month = currentDate.toLocaleString('default', { month: 'long' });
                const year = currentDate.getFullYear();
                dateElement.textContent = `${day} ${month} ${year}`;
            })
            .catch(error => {
                cityElement.textContent = "City not found";
                temperatureElement.textContent = "";
                conditionElement.textContent = "";
                dateElement.textContent = "";
            });
    }
});
