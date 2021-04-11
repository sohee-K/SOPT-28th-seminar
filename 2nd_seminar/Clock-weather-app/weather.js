const weatherTemperature = document.querySelector(".weather_temperature"),
  weatherMain = document.querySelector(".weather_main"),
  weatherTemps = document.querySelector(".weather_temps"),
  weatherOthers = document.querySelector(".weather_others");

const key = "ba4223b1f0c4f7e2cff0dc9034b3f91e"; // API 발급받은 key값

function drawWeather(weather) {
  weatherTemperature.innerHTML = `${weather.temp} °C`;
  weatherMain.innerHTML = `${weather.main}`;
  weatherTemps.innerHTML = `<span>Feels:</span> ${weather.tempFeel} °C &nbsp;&nbsp;
    <span>Min:</span> ${weather.tempMin} °C &nbsp;&nbsp;
    <span>Max:</span> ${weather.tempMax} °C`;
  if (weather.rain) {
    weatherOthers.innerHTML = `<span>Humidity:</span> ${weather.hum} % &nbsp;&nbsp;
    <span>Rain:</span> ${weather.rain} mm/h &nbsp;&nbsp;
    <span>Wind:</span> ${weather.wind} m/s`;
  } else {
    weatherOthers.innerHTML = `<span>Humidity:</span> ${weather.hum} % &nbsp;&nbsp;
    <span>Wind:</span> ${weather.wind} m/s`;
  }
}

const getWeatherData = async (lat, lon) => {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
  );
  const weatherData = await data.json();
  const ABS_ZERO = 273.15; // 이 API에서는 온도에 절대영도를 사용함

  const weather = {
    temp: (weatherData.main.temp - ABS_ZERO).toFixed(2),
    tempFeel: (weatherData.main.feels_like - ABS_ZERO).toFixed(2),
    tempMin: (weatherData.main.temp_min - ABS_ZERO).toFixed(2),
    tempMax: (weatherData.main.temp_max - ABS_ZERO).toFixed(2),
    hum: weatherData.main.humidity,
    main: weatherData.weather[0].main,
    wind: weatherData.wind.speed,
    id: weatherData.weather[0].id, // 나중에 아이콘 사용하기 위한 용도
    rain: weatherData.rain ? weatherData.rain["1h"] : null, // 비가 올 때만 데이터가 들어있음
  };

  drawWeather(weather);
};

const handleError = () => {
  console.log("Failed to get current position");
};

const handleSuccess = (position) => {
  const { latitude, longitude } = position.coords;
  console.log(latitude, longitude);
  getWeatherData(latitude, longitude);
};

const getLocation = () => {
  navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
};

getLocation();
