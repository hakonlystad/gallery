const navScifi = document.getElementById("navScifi");
const navBooks = document.getElementById("nav1");
const navFact = document.getElementById("navFact");
const navHome = document.getElementById("home");

const navigateScifi = () => {
    sessionStorage.setItem("viewing", "scifi");
    location.href = "index.html";
}

const navigateBooks = () => {
    sessionStorage.setItem("viewing", "books");
    location.href = "index.html";
}

const navigateFact = () => {
    sessionStorage.setItem("viewing", "fact");
    location.href = "index.html";
}

const navigateHome = () => {
    sessionStorage.setItem("viewing", "all");
    location.href = "index.html";
}

navScifi.addEventListener("click", navigateScifi);
navBooks.addEventListener("click", navigateBooks);
navFact.addEventListener("click", navigateFact);
navHome.addEventListener("click", navigateHome);