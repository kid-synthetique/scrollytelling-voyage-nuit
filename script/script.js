gsap.registerPlugin(ScrollTrigger);
let isScrolling;
const body = document.querySelector("body");

/* lazyload des images d'arrière-plan des chapitres */
/* PAS RAPPORT CE LAZY LOAD, à suppriemr plus tard  */
/*var chapitres = document.querySelectorAll(".chapitre");
for(i = 0; i < chapitres.length; i++) {
  var lazy = chapitres[i];
  var src = lazy.dataset.src;

  lazy.style.backgroundImage = 'url("' + src + '")';
}*/

/*  pour lazy load utiliser: https://github.com/ApoorvSaxena/lozad.js */



// ajouter is-scrolling au <body> afin de savoir l'était si on scroll ou non
window.addEventListener("scroll", function () {
  body.classList.add("is-scrolling");
  window.clearTimeout(isScrolling);

  isScrolling = setTimeout(function () {
    body.classList.remove("is-scrolling");
  }, 200);
});

// animation du chapitre 1
gsap.fromTo('.monstre-01', {
  x: '0',
  y: '70vh'
}, {
  scrollTrigger: {
    trigger: "#chapitre1",
    pin: true,
    scrub: true
    // end: "+=10000"
  },
  x: (document.querySelector(".chapitre").offsetWidth - document.querySelector(".monstre-01").offsetWidth),
  y: '40vh',
  /*You can use percentage values: the percentage is relative to the element itself, and not the parent.*/
});


// animation du chapitre 2
gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre2",
    markers: true,
    pin: true,
    toggleActions: "play complete reverse reset"

  },
})
  .fromTo('.monstre-02', {
    x: '50vw',
    y: '51vh',
    scale: 0.2,
    duration: 0.1
  }, {
    x: '50.5vw',
    y: '50vh'
  })

  .to('.monstre-02', {
    y: '64vh',
    ease: "power2.in",
    duration: 2
  })
  .to('.monstre-02', {
    scale: 0.1
  })
  .to('.monstre-02', {
    y: '250vh',
    scale: 50,
    duration: 2,
    ease: "elastic"
  });




/* Prochaine étape: parallax entre section chapitre 1 et chapitre 2 */

/* Idée
: no du chapitre en haut à gauche de ch section et le no serait entouré d'un rond qui se dessine à mesure que le chapitre évolue et quand on est rendu à passer au prochain, le cercle est complété.  */ 