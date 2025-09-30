let minutes = 0, seconds = 0, milliseconds = 0;
let timer;
let running = false;

const minEl = document.getElementById("minutes"); 
const secEl = document.getElementById("seconds");
const msEl = document.getElementById("milliseconds");
const lapsEl = document.getElementById("laps");

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", recordLap);

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(updateTime, 10);
    }
}

function pauseTimer() {
    running = false;
    clearInterval(timer);
}

function resetTimer() {
    running = false;
    clearInterval(timer);
    minutes = seconds = milliseconds = 0;
    minEl.textContent = "00";
    secEl.textContent = "00";
    msEl.textContent = "00";
    lapsEl.innerHTML = "";
}

function recordLap() {
    if (running) {
        const lap = document.createElement("li");
        lap.textContent = `${format(minutes)}:${format(seconds)}:${format(milliseconds)}`;
        lapsEl.appendChild(lap);

        void lap.offsetWidth;
        lap.style.animation = "fadeInLap 0.6s ease forwards, lapGlow 2s infinite alternate";
    }
}

function updateTime() {
    milliseconds++;
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;
    }

    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }

    minEl.textContent = format(minutes);
    secEl.textContent = format(seconds);
    msEl.textContent = format(milliseconds);
}

function format(num) {
    return num < 10 ? "0" + num : num;
}
