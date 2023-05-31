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

  //toronto
  let torontoElement = document.querySelector("#toronto");
  let torontoDateElement = document.querySelector(".date-toronto");
  let torontoTimeElement = document.querySelector(".time-toronto");

  let torontoTimeDate = moment().tz("America/Toronto");
  torontoDateElement.innerHTML = torontoTimeDate.format("dddd, MMMM Do YYYY");
  torontoTimeElement.innerHTML = torontoTimeDate.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //melbourne
  let melbourneElement = document.querySelector("#melbourne");
  let melbourneDateElement = document.querySelector(".date-melbourne");
  let melbourneTimeElement = document.querySelector(".time-melbourne");

  let melbourneTimeDate = moment().tz("Australia/Melbourne");
  melbourneDateElement.innerHTML =
    melbourneTimeDate.format("dddd, MMMM Do YYYY");
  melbourneTimeElement.innerHTML = melbourneTimeDate.format(
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
