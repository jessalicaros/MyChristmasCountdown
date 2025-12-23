/* ====== COUNTDOWN TIMER ====== */
const christmas = new Date("December 25, 2025 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = christmas - now;
  if (distance < 0) return;

  document.getElementById("days").innerText =
    Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText =
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("minutes").innerText =
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("seconds").innerText =
    Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

/* ====== MUSIC CONTROL ====== */
const music = document.getElementById("bgMusic");
const button = document.querySelector(".music-btn");

function toggleMusic() {
  if (music.paused) {
    music.play();
    button.textContent = "⏸ Pause Music";
  } else {
    music.pause();
    button.textContent = "🎶 Play Music";
  }
}

/* ====== SNOW EFFECT ====== */
function createSnowflake() {
  const snow = document.createElement("div");
  snow.className = "snowflake";
  snow.innerText = "❄";
  snow.style.left = Math.random() * window.innerWidth + "px";
  snow.style.animationDuration = 3 + Math.random() * 5 + "s";
  snow.style.fontSize = 10 + Math.random() * 20 + "px";
  document.body.appendChild(snow);
  setTimeout(() => snow.remove(), 8000);
}

setInterval(createSnowflake, 300);
