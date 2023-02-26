var ham = document.getElementById("b_menu");
var pop = document.getElementById("nav1");
var skift = document.getElementById("skifte");
function tilX() {
  skift.setAttribute("values", "M4 8 L36 8 M4 18 L36 18 M4 28 L36 28; M6 4 L34 32 M20 18 L20 18 M6 32 L34 4");
}
function tilBurg() {
  skift.setAttribute("values", "M6 4 L34 32 M20 18 L20 18 M6 32 L34 4; M4 8 L36 8 M4 18 L36 18 M4 28 L36 28");
}
ham.addEventListener("click", function () {
  if (pop.style.display === "block") {
    hideNav();
    skift.beginElement();
    tilBurg();
  }
  else {
    showNav();
    skift.beginElement();
    tilX();
  }
})


window.addEventListener("resize", visesjekk);

function visesjekk() {
  if (pop.style.display === "none" && window.innerWidth > 896) {
    skift.beginElement();
    showNav();
    tilX();
  }
}


function hideNav() {
    const navItems = document.getElementsByClassName("navItem");
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].style.display = "none";
    }            
}

function showNav() {
    const navItems = document.getElementsByClassName("navItem");
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].style.display = "block";
    }            
}