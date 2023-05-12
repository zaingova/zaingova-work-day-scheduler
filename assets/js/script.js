// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeBlock = document.querySelectorAll('.time-block');
var timeText = document.querySelectorAll('.hour')
var descriptionText = document.querySelectorAll('textarea');
var saveButtons = document.querySelector('.saveBtn');

var times = []

// sets each index of the 'times' array to the id of that particular block, which happens to be the hour in 24-h format
for (var i = 0; i < timeBlock.length; i++) {
  times[i] = document.getElementsByClassName('time-block')[i].id;
}

var today = dayjs();

$(function () {

  // when the save button is pressed, save the data to local storage
  $('.saveBtn').click(function () {
    localStorage.setItem($(this).parent('div').attr("id"), $(this).siblings("textarea").val());
  })

  // loop through each time block
  for (var i = 0; i < timeBlock.length; i++) {
    // if current time is greater than the time of this timeblock...
    if (times[i] < today.format('H')) {
      $(timeBlock[i]).addClass("past");
      // time value for this block is printed to the left in 24 hour format
      timeText[i].textContent = times[i] + ":00";
      // else if current time is equal to the time of this timeblock...
    } else if (times[i] == today.format('H')) {
      $(timeBlock[i]).addClass("present");
      timeText[i].textContent = times[i] + ":00";
      // else -- current time is less than the time of this timeblock...
    } else {
      $(timeBlock[i]).addClass("future");
      timeText[i].textContent = times[i] + ":00";
    }
  }

  // pulls data from local storage and adds it to the table
  for (var i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) == 09) {
      descriptionText[0].textContent = localStorage.getItem((localStorage.key(i)));
    } else if (localStorage.key(i) == 10) {
      descriptionText[1].textContent = localStorage.getItem((localStorage.key(i)));
    } else if (localStorage.key(i) == 11) {
      descriptionText[2].textContent = localStorage.getItem((localStorage.key(i)));
    } else if (localStorage.key(i) == 12) {
      descriptionText[3].textContent = localStorage.getItem((localStorage.key(i)));
    } else if (localStorage.key(i) == 13) {
      descriptionText[4].textContent = localStorage.getItem((localStorage.key(i)));
    } else if (localStorage.key(i) == 14) {
      descriptionText[5].textContent = localStorage.getItem((localStorage.key(i)));
    } else if (localStorage.key(i) == 15) {
      descriptionText[6].textContent = localStorage.getItem((localStorage.key(i)));
    } else if (localStorage.key(i) == 16) {
      descriptionText[7].textContent = localStorage.getItem((localStorage.key(i)));
    }
  }

  // display the current date in the header of the page.
  setInterval(function () {
    today = dayjs();
    $('#currentDay').text(today.format('MMM D, YYYY [at] hh:mm:ss a'));
  }, 1000)
});
