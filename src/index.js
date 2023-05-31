function updateTime() {
  //athens
  let athensElement = document.querySelector("#athens");
  let athensDateElement = document.querySelector(".date-athens");
  let athensTimeElement = document.querySelector(".time-athens");

  let athensTimeDate = moment().tz("Europe/Athens");
  athensDateElement.innerHTML = athensTimeDate.format("dddd, MMMM Do YYYY");
  athensTimeElement.innerHTML = athensTimeDate.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //london
  let londonElement = document.querySelector("#london");
  let londonDateElement = document.querySelector(".date-london");
  let londonTimeElement = document.querySelector(".time-london");

  let londonTimeDate = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonTimeDate.format("dddd, MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTimeDate.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function changeCity(event) {
  let selectedCity = event.target.value;
  if (selectCity === "current") {
    selectedCity = moment().tz.guess();
  }
  let cityName = selectedCity.replace("_", " ").split("/")[1];
  selectedCityTime = moment().tz(selectedCity);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div id="cities">
      <div class="name">
        <div>
          <h2>${cityName}</h2>
          <div id="date">${selectedCityTime.format("dddd, MMMM Do YYYY")}
          </div>
        </div>
        <div id="time">${selectedCityTime.format(
          "h:mm:ss"
        )}<small>${selectedCityTime.format("A")}</small></div>
      </div>`;
}

setInterval(updateTime, 1000);
let selectCity = document.querySelector("#city");
selectCity.addEventListener("change", changeCity);
