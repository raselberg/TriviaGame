// Create a count down timer that starts at 00:00 and ends in 3 Mins

// Start the the countdown timer and quiz when start button is clicked

// Create a true or false function for each question based on answer

// Results show when timer goes off

// Everything is reset when page is refreshed 

$(document).ready(function(){
$(".triviaPage").hide();
$(".resultsPage").hide();

$("#startButton").click(function(){
$(".triviaPage").show();
$(".startPage").hide();
})

$("#resultsButton").click(function(){
$(".resultsPage").show();
$(".triviaPage").hide();
$(".startPage").hide();
    
});

});

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            
        }
    }, 1000);
}

window.onload = function () {
    var time = 355/ 2, 
        display = document.querySelector('#timer');
    startTimer(time, display);
};

