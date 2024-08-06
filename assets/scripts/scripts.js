const themeBtn = document.querySelector(".theme-btn")
const themeSwitch = document.querySelector(".status-indicator")
const header = document.querySelector(".header")


window.addEventListener("scroll", function () {
 if (window.scrollY >= 10) {
    header.classList.add("active")
 } else {
    header.classList.remove("active")
 }
});


const menu = document.querySelector('.menu-btn')
const navMenu = document.querySelector(".nav")

menu.addEventListener('click', function () {
    if(navMenu.style.display = "none") {
        navMenu.style.display = "flex"
        navMenu.classList.toggle("active")
        menu.classList.toggle("active")
    } else {
         navMenu.style.display = "none"
    }
})

const year2 = "2024"
const name2 = "Aboo Abdillaah"

const yearStamp = document.querySelector(".year-st")
const nameStamp = document.querySelector(".name-st")

yearStamp.textContent = year2
nameStamp.textContent = name2

const whoami = "Mohamed Jalloh"
const title1 = " A Front-End Developer.";
const title2 = " A Software Engineer by Night.";
const title3 = " A Web Developer by Day."
const title4 = " A Big UX/UI Design Lover!"


const cardBox = document.querySelector(".hero-text")

var typed = new Typed('#hero-text', {
    strings: [whoami, title1, title2, title3, title4],
    typeSpeed: 100,
    backDelay: 2500,
    loop: true,
  loopCount: Infinity,
  });


themeSwitch.addEventListener("click", function() {
    if(document.body.classList.contains("dark-theme")) {
        document.body.classList.add("light-theme")
        document.body.classList.remove("dark-theme")
        themeSwitch.classList.add("day")
        themeSwitch.classList.remove("night")
        localStorage.setItem("theme", "light-mode");
    } else {
        document.body.classList.add("dark-theme")
        document.body.classList.remove("light-theme")
        themeSwitch.classList.add("night")
        themeSwitch.classList.remove("day")
        localStorage.setItem("theme", "dark-mode");
    }
})


if (localStorage.getItem("theme") === "light-mode") {
    themeSwitch.classList.add("day")
    themeSwitch.classList.remove("night")
    document.body.classList.add("light-theme")
    document.body.classList.remove("dark-theme")
  } else {
    themeSwitch.classList.add("night")
    themeSwitch.classList.remove("day")
    document.body.classList.add("dark-theme")
    document.body.classList.remove("light-theme")
  }
  
  
