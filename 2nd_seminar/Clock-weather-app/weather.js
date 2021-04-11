const weatherTemperature = document.querySelector(".weather_temperature"),
  weatherMain = document.querySelector(".weather_main"),
  weatherTemps = document.querySelector(".weather_temps"),
  weatherOthers = document.querySelector(".weather_others");

const key = "ba4223b1f0c4f7e2cff0dc9034b3f91e"; // API 발급받은 key값

const drawIcon = (id) => {
  const skycons = new Skycons({ color: "white", resizeClear: true });
  skycons.add("weather_icon", Skycons.CLOUDY);

  const code = parseInt(id / 100); // id 번호에 따라 날씨가 분류됨
  const hour = new Date().getHours();

  switch (code) {
    case 2:
      skycons.set("weather_icon", Skycons.WIND);
      break;
    case 3:
    case 5:
      skycons.set("weather_icon", Skycons.RAIN);
      break;
    case 6:
      skycons.set("weather_icon", Skycons.SNOW);
      break;
    case 7:
      skycons.set("weather_icon", Skycons.FOG);
      break;
    case 8:
      switch (id) {
        case 800:
          if (hour >= 6 && hour <= 17)
            skycons.set("weather_icon", Skycons.CLEAR_DAY);
          else skycons.set("weather_icon", Skycons.CLEAR_NIGHT);
          break;
        case 801:
        case 802:
          if (hour >= 6 && hour <= 17)
            skycons.set("weather_icon", Skycons.PARTLY_CLOUDY_DAY);
          else skycons.set("weather_icon", Skycons.PARTLY_CLOUDY_NIGHT);
          break;
        case 803:
        case 804:
          skycons.set("weather_icon", Skycons.CLOUDY);
          break;
      }
      break;
    default:
      skycons.set("weather_icon", Skycons.SLEET);
      break;
  }
  skycons.play();
};

const drawWeather = (weather) => {
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

  drawIcon(weather.id);
};

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
    icon: weatherData.weather[0].icon,
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
