const container = $(".container");
var currentDate = moment().format("dddd MMMM Do, YYYY");
var currentTime = moment().format("h");
currentTime = 11;
var amOrPm = moment().format("A");
amOrPm = "AM";
var timeArray = ["9AM","10AM","11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var tasks = ["", "", "", "", "", "", "", "", ""];

//Changes text in p tag to the current date for the when the page is loaded
$("#currentDay").text(currentDate);
console.log(currentTime + amOrPm);
console.log(currentDate);

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
    newDiv.append(saveBtn);
    
    if (timeArray[i] === currentTime + amOrPm) {
        desBlock.addClass("present");
    } else if (currentTime > 5 && amOrPm == "PM") {
        desBlock.addClass("past");
    } else if (currentTime < 9 && amOrPm == "AM") {
        desBlock.addClass("future");
    } else if (i >= 1 && amOrPm === "AM") {
        desBlock.addClass("future");
    } else {
        desBlock.addClass("past");
    }
    container.append(newDiv);
}

container.on('click', function(event) {
    var clickedButton = $(event.target);
    var hourEl = clickedButton.parent();
    for (let i=0; i < timeArray.length; i++) {
        if (hourEl.id == timeArray[i]) {
            tasks[i] = hourEl.children(1).text();
        }
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));    
})

function loadTasks() {
    if (JSON.parse(localStorage.getItem("tasks")) == null){
        return;
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
        for (let i = 0; i < tasks.length; i++){
            console.log(container.children().children(i));
            // container.children(i).children(2).text(tasks[i]);
        }
    }
}

loadTasks();