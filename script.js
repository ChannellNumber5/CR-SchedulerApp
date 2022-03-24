var currentDate = moment().format("dddd MMMM Do, YYYY");
var currentTime = moment().format("h");
var amOrPm = moment().format("A");
var timeArray = ["9AM","10AM","11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

//Changes text in p tag to the current date for the when the page is loaded
$("#currentDay").text(currentDate);
console.log(currentTime + amOrPm);
console.log(currentDate);

for (let i = 0; i < timeArray.length; i++) {
    var newDiv = $("<div>");
    var hour = $("<div>");
    hour.attr("class", "hour");
    newDiv.attr("id", timeArray[i]);
    if (timeArray[i] === currentTime + amOrPm) {
        newDiv.attr("class", "time-block present");
    } else if (i > 2 && amOrPm === "AM") {
        newDiv.attr("class", "time-block future");
    } else {
        newDiv.attr("class", "time-block past");
    }
}
var nineAM = $("<div>");
nineAM.attr({"id", "9AM",})
if (nineAM.id === currentTime) {
    nineAM.attr("class","time-blockpresent");
} else if (nineAM.id ) {
    nineAM.attr("class", "")
}
