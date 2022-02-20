//Animations open
window.addEventListener("load", function (event) {
  /*document.getElementsByTagName("body").classList.remove("preload");*/
});

//FOR THE ACORDEON
const centros = document.querySelectorAll(".contact__centro");

centros.forEach((centro) => {
  centro.addEventListener("click", () => {
    centro.classList.toggle("active");
  });
});

//VIDEO BACKGROUND
const video = document.getElementById("v0");

video.defaultPlaybackRate = 1;
video.load();

window.addEventListener("scroll", () => {
  video.playbackRate = 2;
  setTimeout(() => {
    video.playbackRate = 1;
  }, 1500);
});

window.addEventListener("mousewheel", () => {
  video.playbackRate = 4;
  setTimeout(() => {
    video.playbackRate = 1;
  }, 1500);
});

//scroll animations
// ScrollOut();
// ScrollOut({
//   target: ".decorative-line-1::after",
// });
// GLIDER
const robots_info = document.querySelectorAll(".robot-info");
let glider = new Glider(document.querySelector(".glider__robot"), {
  slidesToShow: 1,
  dots: "#dots",
  draggable: true,
  resizeLock: false,
  arrows: {
    prev: "#prev-slide",
    next: "#next-slide",
  },
});
let carouselStatus = document.querySelector(".carousel-status");

function updateStatus() {
  let slideNumber = glider.getCurrentSlide() + 1;
  carouselStatus.textContent = slideNumber + " / " + glider.slides.length;
  //update robot info
  robots_info.forEach((robot) => {
    robot.classList.remove("active");
    if (robot.dataset.slide == slideNumber) {
      robot.classList.add("active");
    }
  });
}
updateStatus();
let selector = document.querySelector(".glider__robot");
selector.addEventListener("scroll", updateStatus);

//-------------------NAVBAR
const navbar = document.getElementById("navbar");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    navbar.style.borderBottom = "2px solid #eb5f22";
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.borderBottom = "none";
  }
}

//------------------NAV FUNTIONALITY
const nav_links = document.querySelectorAll(".nav__link");
const submenus = document.querySelectorAll(".submenu");
const sups = document.querySelectorAll("sup");

nav_links.forEach((nav_link) =>
  nav_link.addEventListener("mouseover", activateSubmenu)
);

function activateSubmenu() {
  let data = this.dataset.index;
  removeActiveMenu();
  this.classList.add("active");

  sups.forEach((sup) => {
    sup.classList.remove("sup__active");
    console.log("hola");

    if (sup.dataset.index == data) {
      console.log("activating...");
      sup.classList.add("sup__active");
    }
  });

  submenus.forEach((submenu) => {
    submenu.classList.remove("submenu__active");

    if (submenu.dataset.index == data) {
      submenu.classList.add("submenu__active");
    }
  });
}

function removeActiveMenu() {
  nav_links.forEach((nav_link) => nav_link.classList.remove("active"));
}

//--------------------NAV CLICK STYLES CHANGES

const logo = document.querySelector(".logo");
const action_btn = document.querySelector("#empieza-ahora");

const menu_btn = document.querySelector("#nav-toggle");

menu_btn.addEventListener("click", activeMenuStyles);

function activeMenuStyles() {
  logo.classList.toggle("white-image");
  action_btn.classList.toggle("line-btn--white");

  let menu_label = document.querySelector(".nav__button--text");
  if (menu_label.innerText == "MENU") {
    menu_label.innerText = "CERRAR";
  } else {
    menu_label.innerText = "MENU";
  }
}

//decorative-line animation on scroll
// let line_height = document.querySelector(".decorative-line-1");

// let max_h = 30;

// line_height.addEventListener("scroll", () => {
//   console.log(line_height.scrollTop);
//   document.documentElement.style.setProperty("--h", max_h + "px");
// });

// let last_known_scroll_position = 0;
// let ticking = false;

// function doSomething(scroll_pos) {
//   if (scroll_pos > 100) {
//     max_h = 30;
//     document.documentElement.style.setProperty("--h", max_h + "px");
//   }
//   if (scroll_pos > 100) {
//     max_h++;
//     document.documentElement.style.setProperty("--h", max_h + "px");
//   }
//   if (scroll_pos > 400) {
//     max_h = "120";
//     document.documentElement.style.setProperty("--h", max_h + "px");
//     ticking = true;
//   }
// }

// window.addEventListener("scroll", function (e) {
//   last_known_scroll_position = window.scrollY;
//   console.log(last_known_scroll_position);

//   if (!ticking) {
//     window.requestAnimationFrame(function () {
//       doSomething(last_known_scroll_position);
//       ticking = false;
//     });

//     ticking = true;
//   }
// });
///GSAP
gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);
let line1 = CSSRulePlugin.getRule(".decorative-line-1::after");
let line2 = CSSRulePlugin.getRule(".decorative-line-2::after");
let line3 = CSSRulePlugin.getRule(".decorative-line-3::before");

gsap.to(line1, {
  duration: 0.5, 
  scrollTrigger: {
    trigger: ".card-black",
    toggleActions: "play complete reverse reset"
  },
  cssRule: {height: "180px"},

});

gsap.to(line2, {
  duration: 1, 
  scrollTrigger: {
    trigger: ".decorative-line-2",
    toggleActions: "play complete reverse reset"
  },
  cssRule: {height: "180px"},

})