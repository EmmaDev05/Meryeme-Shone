console.clear();

gsap.registerPlugin(ScrollTrigger);

const horizontalSections = gsap.utils.toArray("section.sectionPin");

window.addEventListener("load", function () {
  horizontalSections.forEach(function (sec, i) {
    const pinWrap = sec.querySelector(".pin-wrap");
    const horSections = gsap.utils.toArray(".charity", sec);
    const box = sec.querySelector(".fade");
    console.log(box);

    let pinWrapWidth;
    let horizontalScrollLength;

    function refresh() {
      pinWrapWidth = pinWrap.scrollWidth;
      horizontalScrollLength = pinWrapWidth - window.innerWidth;
    }

    refresh();

    // Pinning and horizontal scrolling
    const tl = gsap
      .timeline({
        scrollTrigger: {
          scrub: true,
          trigger: sec,
          pin: pinWrap,
          start: "top top",
          end: () => `+=${pinWrapWidth}`,
          invalidateOnRefresh: true,
        },
      })
      .to(pinWrap, {
        x: () => -horizontalScrollLength,
        ease: "none",
        duration: horSections.length,
      });
    if (box) {
      tl.to(box, {
        opacity: 0,
      });
    }

    ScrollTrigger.addEventListener("refreshInit", refresh);
  });
});

/* Sidebar menu*/
// close hamburger menu after click a
$(".menu-list li a").on("click", function () {
  $("#hamburger-menu").click();
});
document.addEventListener("DOMContentLoaded", function () {
  var menuLinks = document.querySelectorAll(".menu-link");

  for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", function () {
      document.getElementById("menu_checkbox").checked = false;
    });
  }
});

$(document).ready(function () {
  let currentSlide = 1;
  const totalSlides = 4;
  const changeInterval = 3000; // 3 seconds

  setInterval(function () {
    // Check the next radio button
    $(`input[type=radio][title=slide${currentSlide}]`).prop("checked", true);

    // Update the current slide number
    currentSlide++;

    if (currentSlide > totalSlides) {
      currentSlide = 1; // Reset to the first slide after the last one
    }
  }, changeInterval);
});
