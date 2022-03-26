const container = $(".container");
var currentDate = moment().format("dddd MMMM Do, YYYY");
var currentTime = moment().format("h");
var amOrPm = moment().format("A");
var timeArray = ["9AM","10AM","11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var tasks = ["", "", "", "", "", "", "", "", ""];

//Changes text in p tag to the current date for the when the page is loaded
$("#currentDay").text(currentDate);
console.log(currentTime + amOrPm);
console.log(currentDate);
let marker = null;
for (let i = 0; i < timeArray.length; i++) {
    var newDiv = $("<div>");
    newDiv.attr("class", "time-block row" );
    newDiv.attr("id", timeArray[i]);
    var hourDiv = $("<div>");
    hourDiv.attr("class", "hour col-1");
    hourDiv.text(timeArray[i]);
    newDiv.append(hourDiv);
    var desBlock = $("<textarea>");
    desBlock.attr("class", "description col-10");
    newDiv.append(desBlock);
    var saveBtn = $("<button>");
    saveBtn.attr("class", "saveBtn col-1");
    var saveIcon = $("<i>");
    saveIcon.addClass("fas fa-save");
    saveBtn.append(saveIcon);
    newDiv.append(saveBtn);
    
    if (timeArray[i] === currentTime + amOrPm) {
        desBlock.addClass("present");
        marker = i;
    } else if (currentTime > 5 && currentTime < 12 && amOrPm == "PM") {
        desBlock.addClass("past");
    } else if ((currentTime < 9 || currentTime == 12) && amOrPm == "AM") {
        desBlock.addClass("future");
    } else if (marker === null) {
        desBlock.addClass("past");
    } else {
        desBlock.addClass("future");
    }
    container.append(newDiv);
}

container.on('click', function(event) {
    var clickedButton = $(event.target);
    if (clickedButton.hasClass("saveBtn")){
        var hourEl = clickedButton.parent();
        console.log(hourEl.attr("id"));
        for (let i=0; i < timeArray.length; i++) {
            if (hourEl.attr("id") == timeArray[i]) {
                tasks[i] = hourEl.children("textarea").val();
            }
        }
        localStorage.setItem("tasks", JSON.stringify(tasks));
        console.log("input into localStorage");
    } else {        
        return;
    }
})

function loadTasks() {
    console.log(tasks);
    if (JSON.parse(localStorage.getItem("tasks")) == null) {
        console.log("localStorage is empty");
        return;
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
        for (let i = 0; i < tasks.length; i++){
            container.children("div").eq(i).children("textarea").val(tasks[i]);
        }
    }
}

loadTasks();