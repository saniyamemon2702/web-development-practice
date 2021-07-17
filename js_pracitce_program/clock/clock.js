"use strict";
var $ = function (id) {
  return document.getElementById(id);
};

var displayCurrentTime = function () {
  var today = new Date();
  let ampm;

  let hours = today.getHours();
  if (hours > 12) {
    hours -= 12;
    hours = padSingleDigit(hours);
    ampm = "PM";
  } else if (hours == 12) {
    hours = padSingleDigit(0);
    ampm = "AM";
  } else {
    ampm = "AM";
  }
  let min = padSingleDigit(today.getMinutes());
  let sec = padSingleDigit(today.getSeconds());
  console.log(`current time:${hours}:${min}:${sec} ${ampm}`);
  // console.log($("hours"));
  $("hours").innerText = hours;
  $("minutes").innerText = min;
  $("seconds").innerText = sec;
  $("ampm").innerText = ampm;
};

var padSingleDigit = function (num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
};

window.onload = function () {
  setInterval(displayCurrentTime, 1000);
  // set initial clock display and then set interval timer to display
  // new time every second. Don't store timer object because it
  // won't be needed - clock will just run.
};
