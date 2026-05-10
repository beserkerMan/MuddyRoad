/**
 * Sticky Nav – Albrekts Pizzeria
 * Adds .nav-scrolled to <nav> once the user scrolls past the hero.
 * Requires jQuery.
 */

$(function () {

  var $nav  = $('nav');
  var $hero = $('#hero, .om-hero, .meny-hero').first();

  function updateNav() {
    var heroBottom = $hero.length
      ? $hero.offset().top + $hero.outerHeight()
      : 80;

    if ($(window).scrollTop() > heroBottom) {
      $nav.addClass('nav-scrolled');
    } else {
      $nav.removeClass('nav-scrolled');
    }
  }

  $(window).on('scroll', updateNav);
  updateNav(); // run once on load in case page is already scrolled
});
