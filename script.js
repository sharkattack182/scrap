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

    // Stops the timer and resets the time back to users input
    stopButton.addEventListener("click", function () {
        clearInterval(timerInterval);
        console.log(totalSeconds)
        totalSeconds = workMinutesInput.value * 60;
        minutesDisplay.textContent = Math.floor(totalSeconds / 60);
        secondsDisplay.textContent = "00"
    });

    // pause the timer starts new interval for rest min and creates a new timer at the end
    pauseButton.addEventListener("click", function () {
        console.log("paused");
        var restMilliseconds = restMinutesInput.value * 60000;
        console.log(restMilliseconds)
        clearInterval(timerInterval);
        console.log(totalSeconds);
        var restSeconds = restMinutesInput.value * 60;
        restTimer()

        // rest period timer
        function restTimer() {
            var restInterval = setInterval(function () {
                restSeconds--;
                minutesDisplay.textContent = Math.floor(restSeconds / 60);
                secondsDisplay.textContent = restSeconds - Math.floor(restSeconds / 60) * 60

                if (restSeconds === 0) {
                    clearInterval(restInterval);
                    newTimer();
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

                }

            }, 1000)

        };

    })

    // pauses the timer
    //     pauseButton.addEventListener("click", function () {
    //         console.log(totalSeconds)

    //         var paused = true;
    //         restMilliseconds = restMinutesInput.value * 60000;
    //         console.log(restMilliseconds)

    //         setTimeout(restTimer, restMilliseconds);

    //         function restTimer() {
    //             restSeconds = restMinutesInput.value * 60;
    //             var restInterval = setInterval(function () {
    //                 restSeconds--;

    //                 minutesDisplay.textContent = ""
    //                 secondsDisplay.textContent = ""
    //                 minutesDisplay.textContent = Math.floor(restSeconds / 60);
    //                 secondsDisplay.textContent = restSeconds - Math.floor(restSeconds / 60) * 60

    //                 if (restSeconds === 0) {
    //                     clearInterval(restInterval);
    //                     alert("rest time is up")
    //                 }

    //                 playButton.addEventListener("click", function () {
    //                     if(paused === true) {
    //                         paused = false;
    //                         var newTimer = setInterval(function () {
    //                             totalSeconds--;
    //                             minutesDisplay.textContent = Math.floor(totalSeconds / 60);
    //                             secondsDisplay.textContent = totalSeconds - Math.floor(totalSeconds / 60) * 60

    //                             if (totalSeconds === 0) {
    //                                 clearInterval(newTimer);
    //                                 alert("time is up")
    //                             }



    //                         }, 1000)
    //                     }
    //                 })

    //             }, 1000);
    //             minutesDisplay.textContent = Math.floor(restSeconds / 60);
    //             secondsDisplay.textContent = restSeconds - Math.floor(restSeconds / 60) * 60
    //         }




    //     })

}




playButton.addEventListener("click", startTimer);

