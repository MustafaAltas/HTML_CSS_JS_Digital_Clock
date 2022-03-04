function clock() {
  let hour = document.querySelector(".hour");
  let minute = document.querySelector(".minute");
  let second = document.querySelector(".second");
  let info = document.querySelector(".info");

  let currentHour = new Date().getHours();
  let curretnMinute = new Date().getMinutes();
  let currentSecond = new Date().getSeconds();

  if (currentHour > 0 && currentHour < 12) {
    info.innerText = "P.M";
  } else {
    currentHour = 24 - currentHour;
    info.innerText = "A.M";
  }

  if (currentHour < 10) {
    hour.innerText = "0" + currentHour;
  } else if (currentHour < 12) {
    hour.innerText = currentHour;
  }
  if (curretnMinute < 10) {
    minute.innerText = "0" + curretnMinute;
  } else {
    minute.innerText = curretnMinute;
  }
  if (currentSecond < 10) {
    second.innerText = "0" + currentSecond;
  } else {
    second.innerText = currentSecond;
  }
}

setInterval(clock, 1000);
