
var currentDay = $("#currentDay")


//Displaying the time
// function displayTime() {
//     var rightNow = moment().format('dddd, MMMM Do');
//     console.log(currentDay)
//     currentDay.text(rightNow);
//   }
// displayTime()



$(document).ready(function () {

    // Displays the time
    var rightNow = moment();
    currentDay.text(rightNow.format('dddd, MMMM Do'));

    // Save text in local storage 
    $(".saveBtn").on("click", function () {
        var textValue = $(this).siblings(".description").val();
        var timeKey = $(this).parent().attr("id");
        localStorage.setItem(timeKey, textValue);
    })
    
    // Get saved text 
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
    
    // Change timeblocks color by time 
    function cssUpdate () {
       var currentHour = rightNow.hours();
       $(".time-block").each(function () {
           var divTimeId = parseInt($(this).attr("id"));
         
           if (divTimeId < currentHour) {
               $(this).addClass("past");
           } else if (divTimeId === currentHour) {
               $(this).removeClass("past");
               $(this).removeClass("future");
               $(this).addClass("present");
           } else {
               $(this).removeClass("past");
               $(this).removeClass("present");
               $(this).addClass("future");
           }
       })
    }
    
    cssUpdate ();
    
    })