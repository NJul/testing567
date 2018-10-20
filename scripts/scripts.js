/*
 * - Define variables
 * - Calculate the document height and set the offset to a quarter of that value.
 * - Add event listeners for scroll and click.
 */

var btt = document.getElementById("back-to-top"),
  body = document.body,
  docElem = document.documentElement,
  offset = 100,
  scrollPos,
  docHeight;

// Calculate the document height
docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);

if (docHeight != 'undefined') {
  offset = docHeight / 5;
}

// Add scroll event listener
window.addEventListener("scroll", function (event) {
  scrollPos = body.scrollTop || docElem.scrollTop;

  btt.className = (scrollPos > offset) ? "visible" : "";
});

/* */

var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
  V = 0.1; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
    e.preventDefault(); //отменяем стандартное поведение
    var w = window.pageYOffset, // производим прокрутка прокрутка
      hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти
    t = document.querySelector(hash).getBoundingClientRect().top, // отступ от окна браузера до id
      start = null;
    requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
        r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
      window.scrollTo(0, r);
      if (r != w + t) {
        requestAnimationFrame(step)
      } else {
        location.hash = hash // URL с хэшем
      }
    }
  }, false);
}
/* */