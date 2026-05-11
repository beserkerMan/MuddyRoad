/**
 * Hero image fade slider – Albrekts Pizzeria
 * Fades between background images on #hero every 5 seconds.
 * Requires jQuery.
 */

$(function () {
  var images = [
    "media/chahah.jpeg",
    "media/duddu.jpg",
    "media/uewd.jpg",
  ];

  var overlay = "linear-gradient(rgba(30, 10, 5, 0.52), rgba(30, 10, 5, 0.62))";
  var current = 0;
  var $hero   = $('#hero');

  if (!$hero.length) return; // only runs on pages that have #hero

  function setImage(index) {
    $hero.css('backgroundImage', overlay + ', url("' + images[index] + '")');
  }

  // Set the first image immediately on load
  setImage(current);

  // Rotate every 5 seconds using jQuery .animate() for the fade
  setInterval(function () {
    current = (current + 1) % images.length;

    $hero.animate({ opacity: 0.1 }, 400, function () {
      setImage(current);
      $hero.animate({ opacity: 1 }, 400);
    });
  }, 5000);
});
