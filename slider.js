const images = [
    "media/chahah.jpeg",
    "media/duddu.jpg",
    "media/uewd.jpg",
];

const overlay = "linear-gradient(rgba(30, 10, 5, 0.52), rgba(30, 10, 5, 0.62))";

let current = 0;
const hero = document.getElementById("hero");

function setImage(index) {
  hero.style.backgroundImage = `${overlay}, url("${images[index]}")`;
}

function nextSlide() {
  current = (current + 1) % images.length;

  hero.style.opacity = "0.1";

  setTimeout(() => {
    setImage(current);
    hero.style.opacity = "1";
  }, 500);
}

// Set first image on load
setImage(current);

// Add fade transition to hero
hero.style.transition = "opacity 0.4s ease";

// Rotate every 4 seconds
setInterval(nextSlide, 5000);