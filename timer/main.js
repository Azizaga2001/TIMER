let countDownDate = new Date("Jan 1, 2023 0:0:0").getTime();

let x = setInterval(function () {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("block").innerHTML = days + " Day " + hours + " Hour "
        + minutes + " Minute " + seconds + " Second ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("block").innerHTML = "Happy new Year";
    }
}, 1000);