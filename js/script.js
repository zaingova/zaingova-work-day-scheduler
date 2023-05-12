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
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('.saveBtn').click(function () {
    console.log(this);
    localStorage.setItem(this.id, descriptionText[0].textContent);
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
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
setInterval(function () {
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY [at] hh:mm:ss a'));
}, 1000)
});
