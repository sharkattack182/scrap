var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;

  
function startTimer() {
    // Write code to start the timer here
    statusToggle.addEventListener('change', function() {
        if (this.checked) {
          console.log("Checkbox is checked..");
          startTimer();
          
        } else {
          console.log("Checkbox is not checked..");
          clearInterval(); 
          restTimer();
        }
      });
    
    
    console.log(workMinutesInput.value)
    totalSeconds = workMinutesInput.value * 60;
    var timerInterval = setInterval(function () {
        totalSeconds--;
        minutesDisplay.textContent = Math.floor(totalSeconds / 60);
        secondsDisplay.textContent = totalSeconds - Math.floor(totalSeconds / 60) * 60

        if (totalSeconds === 0) {
            clearInterval(timerInterval);
            alert("time is up")
        }
        
    }, 1000);

    function newTimer() {

        var newInterval = setInterval(function () {
            totalSeconds--;
            minutesDisplay.textContent = Math.floor(totalSeconds / 60);
            secondsDisplay.textContent = totalSeconds - Math.floor(totalSeconds / 60) * 60

            if (totalSeconds === 0) {
                clearInterval(newInterval);
                alert("time is up")
            }

        }, 1000);
    }

    // This function stops the timer and resets it
    function stopTimer() {
        clearInterval(timerInterval);
        console.log(totalSeconds)
        totalSeconds = workMinutesInput.value * 60;
        minutesDisplay.textContent = Math.floor(totalSeconds / 60);
        secondsDisplay.textContent = "00"
    }
    
    // this function sets the pause timer counts down the rest time then starts a timer where the previous left off. 
    function restTimer() {

        console.log("paused");
        clearInterval(timerInterval);
        console.log(totalSeconds);
        var restSeconds = restMinutesInput.value * 60;

        var restInterval = setInterval(function () {
            restSeconds--;
            minutesDisplay.textContent = Math.floor(restSeconds / 60);
            secondsDisplay.textContent = restSeconds - Math.floor(restSeconds / 60) * 60

            if (restSeconds === 0) {
                clearInterval(restInterval);
                newTimer();
            }

            
        }, 1000)

    };

    pauseButton.addEventListener("click", restTimer);
    stopButton.addEventListener("click", stopTimer);

}




playButton.addEventListener("click", startTimer);

