gsap.registerPlugin(ScrollTrigger);


let isScrolling;
const body = document.querySelector("body");

window.addEventListener("scroll", function () {
  body.classList.add("is-scrolling");
  window.clearTimeout(isScrolling);

  isScrolling = setTimeout(function () {
    body.classList.remove("is-scrolling");
  }, 200);
});

gsap.fromTo('.monstre-01', {
    x: '0',
    y: '70vh'
}, {
    scrollTrigger: {
        trigger: ".histoire",
       /* markers: true,*/
        pin: true,
        scrub: 0.1,
        end: "+=10000"
    },
    x: (document.querySelector(".chapitre").offsetWidth-document.querySelector(".monstre-01").offsetWidth),
    y: '40vh',
    /*You can use percentage values: the percentage is relative to the element itself, and not the parent.*/
});



/* Prochaine étape: parallax entre section chapitre 1 et chapitre 2 */

/* Idée
: no du chapitre en haut à gauche de ch section et le no serait entouré d'un rond qui se dessine à mesure que le chapitre évolue et quand on est rendu à passer au prochain, le cercle est complété.  */ 