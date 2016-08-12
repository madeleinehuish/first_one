function determineDaysOfMonth(month) {
    console.log("month inside determineDaysofMonth " + month);
    if (month === "January" || month === "March" || month === "May" || month === "July" || month === "August" || month === "October" || month === "December") {
        var days = 31;
        return days;
    } else if (month === "April" || month === "June" || month === "September" || month === "November") {
        console.log(30);
        var days = 30;
        return days;
    } else {
        console.log(28);
        var days = 28;
        return days;
    }
}

function printDaysOfMonth(days, month){
    console.log("days inside printDaysOfMonth " + days);
    for (i = 1; i < days +1; i++) {
        console.log(month + " " + i);
    }
}

var days = determineDaysOfMonth("February");
var month = "February";
printDaysOfMonth(days, month);
