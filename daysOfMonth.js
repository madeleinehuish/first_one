function determineDaysOfMonth(month) {
    if (month === "January" || month === "March" || month === "May" || month = "July" || month === "August" || month === "October" || month === "December") {
        var days = 31;
        return days;
    } else if (month === "April" || month === "June" || month === "September" || month === "November") {
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

determineDaysOfMonth("February");
var month = "February";
printDaysOfMonth(days, month);
