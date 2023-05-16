function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = "ae53017534c8c6172e42a99d44c6f7d0";

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      // 날씨 아이콘 가져오기
      const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      const weatherIconImg = document.createElement("img");
      weatherIconImg.setAttribute("src", weatherIcon);
      weatherIconImg.id = "weather-icon";
      console.log(weatherIconImg);

      city.innerText = `${data.sys.country}, ${data.name}`;
      weather.innerText = `[ ${data.weather[0].description} / ${data.main.temp}°C ]`;
      weather.before(weatherIconImg);
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
