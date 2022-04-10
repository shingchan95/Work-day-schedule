var currentHour = moment().format("H:00:00");
var a = currentHour.split(':'); 
var currentMinutes = a[0] * 60; 



//set and get items from localstroage 
$("#09table-inputs").val(localStorage.getItem("text09"))
$("#09button").on('click', function () {
    var txt09=$("#09table-inputs").val();
    
    localStorage.setItem("text09",txt09);

});

$("#10table-inputs").val(localStorage.getItem("text10"))
$("#10button").on('click', function () {
    var txt10=$("#10table-inputs").val();
    
    localStorage.setItem("text10",txt10);

});

$("#11table-inputs").val(localStorage.getItem("text11"))
$("#11button").on('click', function () {
    var txt11=$("#11table-inputs").val();
    
    localStorage.setItem("text11",txt11);

});

$("#12table-inputs").val(localStorage.getItem("text12"))
$("#12button").on('click', function () {
    var txt12=$("#12table-inputs").val();
    
    localStorage.setItem("text12",txt12);

});

$("#13table-inputs").val(localStorage.getItem("text13"))
$("#13button").on('click', function () {
    var txt13=$("#13table-inputs").val();
    
    localStorage.setItem("text13",txt13);

});

$("#14table-inputs").val(localStorage.getItem("text14"))
$("#14button").on('click', function () {
    var txt14=$("#14table-inputs").val();
    
    localStorage.setItem("text14",txt14);

});

$("#15table-inputs").val(localStorage.getItem("text15"))
$("#15button").on('click', function () {
    var txt15=$("#15table-inputs").val();
    
    localStorage.setItem("text15",txt15);

});

$("#16table-inputs").val(localStorage.getItem("text16"))
$("#16button").on('click', function () {
    var txt16=$("#16table-inputs").val();
    
    localStorage.setItem("text16",txt16);

});

$("#17table-inputs").val(localStorage.getItem("text17"))
$("#17button").on('click', function () {
    var txt17=$("#17table-inputs").val();
    
    localStorage.setItem("text17",txt17);

});


//header current date
var today= moment()
$("#currentDay").text(today.format("MMMM Do, YYYY"));
var currentTime = moment().format("hh:00 A")



//time compare past=grey, present=red, future, green
//1080 = 18:00

if(currentMinutes == 540){
    $("#17table-inputs").css("background-color", "green");
    $("#16table-inputs").css("background-color", "green");
    $("#15table-inputs").css("background-color", "green");
    $("#14table-inputs").css("background-color", "green");
    $("#13table-inputs").css("background-color", "green");
    $("#12table-inputs").css("background-color", "green");
    $("#11table-inputs").css("background-color", "green");
    $("#10table-inputs").css("background-color", "green");
    $("#09table-inputs").css("background-color", "red");
}

if(currentMinutes == 600){
    $("#17table-inputs").css("background-color", "green");
    $("#16table-inputs").css("background-color", "green");
    $("#15table-inputs").css("background-color", "green");
    $("#14table-inputs").css("background-color", "green");
    $("#13table-inputs").css("background-color", "green");
    $("#12table-inputs").css("background-color", "green");
    $("#11table-inputs").css("background-color", "green");
    $("#10table-inputs").css("background-color", "red");
    $("#09table-inputs").css("background-color", "grey");
}

if(currentMinutes == 660){
    $("#17table-inputs").css("background-color", "greem");
    $("#16table-inputs").css("background-color", "greem");
    $("#15table-inputs").css("background-color", "greem");
    $("#14table-inputs").css("background-color", "greem");
    $("#13table-inputs").css("background-color", "greem");
    $("#12table-inputs").css("background-color", "greem");
    $("#11table-inputs").css("background-color", "red");
    $("#10table-inputs").css("background-color", "grey");
    $("#09table-inputs").css("background-color", "grey");
}

if(currentMinutes == 720){
    $("#17table-inputs").css("background-color", "green");
    $("#16table-inputs").css("background-color", "green");
    $("#15table-inputs").css("background-color", "green");
    $("#14table-inputs").css("background-color", "green");
    $("#13table-inputs").css("background-color", "green");
    $("#12table-inputs").css("background-color", "red");
    $("#11table-inputs").css("background-color", "grey");
    $("#10table-inputs").css("background-color", "grey");
    $("#09table-inputs").css("background-color", "grey");
}

if(currentMinutes == 780){
    $("#17table-inputs").css("background-color", "green");
    $("#16table-inputs").css("background-color", "green");
    $("#15table-inputs").css("background-color", "green");
    $("#14table-inputs").css("background-color", "green");
    $("#13table-inputs").css("background-color", "red");
    $("#12table-inputs").css("background-color", "grey");
    $("#11table-inputs").css("background-color", "grey");
    $("#10table-inputs").css("background-color", "grey");
    $("#09table-inputs").css("background-color", "grey");
}

if(currentMinutes == 8400){
    $("#17table-inputs").css("background-color", "green");
    $("#16table-inputs").css("background-color", "green");
    $("#15table-inputs").css("background-color", "green");
    $("#14table-inputs").css("background-color", "red");
    $("#13table-inputs").css("background-color", "grey");
    $("#12table-inputs").css("background-color", "grey");
    $("#11table-inputs").css("background-color", "grey");
    $("#10table-inputs").css("background-color", "grey");
    $("#09table-inputs").css("background-color", "grey");
}

if(currentMinutes == 900){
    $("#17table-inputs").css("background-color", "green");
    $("#16table-inputs").css("background-color", "green");
    $("#15table-inputs").css("background-color", "red");
    $("#14table-inputs").css("background-color", "grey");
    $("#13table-inputs").css("background-color", "grey");
    $("#12table-inputs").css("background-color", "grey");
    $("#11table-inputs").css("background-color", "grey");
    $("#10table-inputs").css("background-color", "grey");
    $("#09table-inputs").css("background-color", "grey");
}

if(currentMinutes == 960){
    $("#17table-inputs").css("background-color", "green");
    $("#16table-inputs").css("background-color", "red");
    $("#15table-inputs").css("background-color", "grey");
    $("#14table-inputs").css("background-color", "grey");
    $("#13table-inputs").css("background-color", "grey");
    $("#12table-inputs").css("background-color", "grey");
    $("#11table-inputs").css("background-color", "grey");
    $("#10table-inputs").css("background-color", "grey");
    $("#09table-inputs").css("background-color", "grey");
}

if(currentMinutes == 1020){
    $("#17table-inputs").css("background-color", "green");
    $("#16table-inputs").css("background-color", "grey");
    $("#15table-inputs").css("background-color", "grey");
    $("#14table-inputs").css("background-color", "grey");
    $("#13table-inputs").css("background-color", "grey");
    $("#12table-inputs").css("background-color", "grey");
    $("#11table-inputs").css("background-color", "grey");
    $("#10table-inputs").css("background-color", "grey");
    $("#09table-inputs").css("background-color", "grey");
}

if(currentMinutes >= 1080){

    $("#17table-inputs").css("background-color", "grey");
    $("#16table-inputs").css("background-color", "grey");
    $("#15table-inputs").css("background-color", "grey");
    $("#14table-inputs").css("background-color", "grey");
    $("#13table-inputs").css("background-color", "grey");
    $("#12table-inputs").css("background-color", "grey");
    $("#11table-inputs").css("background-color", "grey");
    $("#10table-inputs").css("background-color", "grey");
    $("#09table-inputs").css("background-color", "grey");
}