window.onload = function () {
    let seconds = 0
    let tens = 0
    let appendTens = document.getElementById("tens")
    let appendSeconds = document.getElementById("seconds")
    let Startbutton = document.getElementById('start-button');
    let Stopbutton = document.getElementById('stop-button');
    let Resetbutton = document.getElementById('reset-button');
    let Interval;

    Startbutton.onclick = function() {

        clearInterval(Interval);
        Interval = setInterval(startimer, 10);
    }

    Stopbutton.onclick = function() {
        clearInterval(Interval);
    }

    Resetbutton.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }

    function startimer() {
        tens++;

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }
}