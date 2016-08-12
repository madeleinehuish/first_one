function determineDaysOfMonth(month) {
    if (month === "January" || "March" || "May" || "July" || "August" || "October" || "December") {
        var days = 31;
        return days;
    } else if (month === "April" || "June" || "September" || "November") {
        var days = 30;
        return days;
    } else  {
        var days = 28;
        return days;
    }
}

function printDaysOfMonth(days, month) {
    for (i = 1; i < days + 1; i++) {
        console.log(month + " " + i);
    }
}

var days = determineDaysOfMonth("February");
var month = "February";
printDaysOfMonth(days, month);
