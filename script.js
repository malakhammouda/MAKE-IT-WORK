// Target date: 29 November 2025, 00:00:00
const targetDate = new Date("2025-11-29 00:00:00").getTime();

setInterval(function () {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("days").innerHTML = String(days).padStart(2, "0");
  document.getElementById("hours").innerHTML = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerHTML = String(minutes).padStart(2, "0");
  document.getElementById("seconds").innerHTML = String(seconds).padStart(2, "0");

  if (distance < 0) {
    document.querySelector(".countdown").innerHTML = "TIME IS UP!";
  }
}, 1000);
