gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);




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


// animation du chapitre 3

gsap.to("#chapitre3", {
  backgroundPosition: "50% 0%",
  ease: "none",
  scrollTrigger: {
    trigger: "#chapitre3",
    scrub: true
  }
});

gsap.fromTo(".monstre-03", {
  x: "75vw",
  y: "0vh"
},
  {
    x: "75vw",
    y: "100vh",
    ease: "power2.in",
    scrollTrigger: {
      trigger: "#chapitre3",
      scrub: true
    }
  });



//animation chapitre 4

gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre4",
    scrub: true,
    pin: true,
    pinSpacing: true
  }
})
  .to(".hyene", {

    motionPath: {
      path: ".motionpath-arc",
      align: ".motionpath-arc",
      autoRotate: true,
     alignOrigin: [0.5, 0.6]
    }

  })
  .to(".hyene", {
    opacity: 0
  },
  "-=0.5");


gsap.fromTo(".monstre-04", {
  x: "75vw",
  y: "0vh"
},
  {
    x: "75vw",
    y: "100vh",
    ease: "power2.in",
    scrollTrigger: {
      trigger: "#chapitre4",
      scrub: true
    }
  });








//animation chapitre 7
gsap.set(".path-baleine", {
  fillOpacity: 0,
  x: "-5vw"

});

gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre7",
    scrub: true,
    pin: true,
    start: "50% 50%",
    markers: true
  }

})
  .fromTo(
    ".path-baleine",
    {
      drawSVG: "0% 0%"
    },
    {
      drawSVG: "0% 100%"
    }
  )
  .fromTo(
    ".path-baleine",
    {
      fillOpacity: 0
    },
    {
      fillOpacity: 1
    }
  )
  .to(
    ".path-baleine",
    {
      x: "10vw"
    }
  );

//animation chapitre 8


gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre8"
  }

})
  .fromTo(" #svg-pieuvre", {
    y: "10vh"
  },
    {
      y: "18vh",
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      duration: 3
    })














/* Prochaine étape: parallax entre section chapitre 1 et chapitre 2 */

/* Idée
: no du chapitre en haut à gauche de ch section et le no serait entouré d'un rond qui se dessine à mesure que le chapitre évolue et quand on est rendu à passer au prochain, le cercle est complété.  */ 