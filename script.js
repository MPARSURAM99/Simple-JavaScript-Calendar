var tdate = document.getElementById("tdate");
var tday = document.getElementById("tday");
var month = document.getElementById("month");
var year = document.getElementById("year");

var today = new Date();

tdate.innerHTML = today.getDate();
if(today.getDate() < 10){
    tdate.innerHTML = "0"+today.getDate();
}

var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
tday.innerHTML = weekday[today.getDay()];

var months = ["January", "Frebruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
month.innerHTML = months[today.getMonth()];