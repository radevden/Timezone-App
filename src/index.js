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
setInterval(updateTime, 1000);
