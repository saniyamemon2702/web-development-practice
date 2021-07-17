"use strict";
var $ = function (id) {
  return document.getElementById(id);
};

//global stop watch timer variable and elapsed time object
var stopwatchTimer;
var elapsedMinutes = 0;
var elapsedSeconds = 0;
var elapsedMilliseconds = 0;

var displayCurrentTime = function () {
  //create a date object and find out if it is AM or PM
  //display the hours, minutes, milliseconds and AM/PM on the webpage
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

var tickStopwatch = function () {
  // increment milliseconds by 10 milliseconds
  // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero
  // if seconds total 60, increment minutes by one and reset seconds to zero
  //display new stopwatch time
  if (elapsedMilliseconds > 999) {
    elapsedMilliseconds = 0;
    elapsedSeconds++;
  } else if (elapsedSeconds > 59) {
    elapsedSeconds = 0;
    elapsedMinutes++;
  } else {
    elapsedMilliseconds += 10;
  }
  $("s_minutes").innerText = padSingleDigit(elapsedMinutes);
  $("s_seconds").innerText = padSingleDigit(elapsedSeconds);
  $("s_ms").innerText = padSingleDigit(elapsedMilliseconds);
};

// event handler functions
var startStopwatch = function (evt) {
  // prevent default action of link
  // do first tick of stop watch and then set interval timer to tick
  // stop watch every 10 milliseconds. Store timer object in stopwatchTimer
  // variable so next two functions can stop timer.
  evt.preventDefault();
  stopwatchTimer = setInterval(tickStopwatch, 10);
};

var stopStopwatch = function (evt) {
  // prevent default action of link
  // stop timer
  evt.preventDefault();
  clearInterval(stopwatchTimer);
};

var resetStopwatch = function (evt) {
  // prevent default action of link
  // stop timer
  // reset elapsed variables and clear stopwatch display
  evt.preventDefault();
  elapsedMinutes = 0;
  elapsedSeconds = 0;
  elapsedMilliseconds = 0;
  clearInterval(stopwatchTimer);

  $("s_minutes").innerText = padSingleDigit(elapsedMinutes);
  $("s_seconds").innerText = padSingleDigit(elapsedSeconds);
  $("s_ms").innerText = padSingleDigit(elapsedMilliseconds);
};

window.onload = function () {
  // set initial clock display and then set interval timer to display
  // new time every second. Don't store timer object because it
  // won't be needed - clock will just run.
  displayCurrentTime();
  setInterval(displayCurrentTime, 1000);
  $("start").addEventListener("click", startStopwatch);
  $("stop").addEventListener("click", stopStopwatch);
  $("reset").addEventListener("click", resetStopwatch);

  // set up stopwatch event handlers
};
