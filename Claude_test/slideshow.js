/**
 * Hero Slideshow – albrekts pizzeria
 * Slides images in from the right every INTERVAL ms.
 *
 * Usage: add  data-slides='["img1.jpg","img2.jpg","img3.jpg"]'
 *        and  data-overlay="rgba(0,0,0,0.50)"   (optional)
 * to any hero element. Needs jQuery.
 */

$(function () {
  var INTERVAL = 6000;   // ms between transitions
  var SPEED    = 850;    // animation duration in ms

  $('[data-slides]').each(function () {
    var $hero  = $(this);
    var images = $hero.data('slides');          // parsed JSON array by jQuery
    if (!images || images.length < 2) return;  // need at least 2 images

    /* ── Positioning context & overflow clip ── */
    $hero.css({ position: 'relative', overflow: 'hidden' });

    /* ── Remove the static CSS background-image (slides take over) ── */
    $hero.css('backgroundImage', 'none');

    /* ── Lift existing hero content above slide layers ── */
    $hero.wrapInner('<div class="hero-inner">');

    /* ── Gradient overlay – sits between slides (z:0) and content (z:2) ── */
    var overlayColor = $hero.data('overlay') || 'rgba(0,0,0,0.50)';
    $('<div class="hero-overlay">').css(
      'background',
      'linear-gradient(' + overlayColor + ', ' + overlayColor + ')'
    ).appendTo($hero);

    /* ── Build slide elements ── */
    var slides = [];
    $.each(images, function (i, src) {
      var $slide = $('<div class="hero-slide">').css({
        backgroundImage : 'url(' + src + ')',
        left            : i === 0 ? '0%' : '100%'   // first visible, rest off-right
      }).prependTo($hero);
      slides.push($slide);
    });

    /* ── Cycle ── */
    var current = 0;

    setInterval(function () {
      var next  = (current + 1) % slides.length;
      var $cur  = slides[current];
      var $next = slides[next];

      $next.css('left', '100%');                          // ensure next is at right edge
      $cur.animate( { left: '-100%' }, SPEED, 'swing');   // current → exits left
      $next.animate({ left:    '0%' }, SPEED, 'swing');   // next    → enters from right

      current = next;
    }, INTERVAL);
  });
});
