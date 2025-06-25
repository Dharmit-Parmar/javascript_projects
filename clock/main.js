let htime = document.getElementById("hour-time");
let mtime = document.getElementById("min-time");
let anime = document.getElementById("min-anime");

let lastMin = null;

function changeTimeForSquare() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();

    htime.textContent = hour < 10 ? "0" + hour : hour;
    mtime.textContent = min < 10 ? "0" + min : min;

    if (hour > 12) {
        hour = hour - 12;
        htime.textContent = hour < 10 ? "0" + hour : hour;
    }
}

function animateMinuteChange() {
    anime.style.animation = "none";
    void anime.offsetWidth;
    anime.style.animation = "rotate 2s forwards linear";
}

setInterval(() => {
    let date = new Date();
    let min = date.getMinutes();

    if (min !== lastMin) {
        changeTimeForSquare();
        animateMinuteChange();
        lastMin = min;
    }
}, 1000);