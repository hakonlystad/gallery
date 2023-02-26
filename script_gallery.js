const logoName = document.getElementById("logo_name");
const view = document.getElementById("view");
const viewBooks = document.getElementById("viewBooks");
const viewScifi = document.getElementById("viewScifi");
const viewFact = document.getElementById("viewFact");

/* ––– HIDE & SHOW ––– */
const hideBooks = () => {
    const books = document.getElementsByClassName("books");
    for (let i = 0; i < books.length; i++) {
        books[i].style.display = "none";
    }
}

const hideScifi = () => {
    const scifi = document.getElementsByClassName("scifi");
    for (let i = 0; i < scifi.length; i++) {
        scifi[i].style.display = "none";
    }
}

const hideFact = () => {
    const fact = document.getElementsByClassName("fact");
    for (let i = 0; i < fact.length; i++) {
        fact[i].style.display = "none";
    }
}

const showBooks = () => {
    const books = document.getElementsByClassName("books");
    for (let i = 0; i < books.length; i++) {
        books[i].style.display = "block";
    }
}

const showScifi = () => {
    const scifi = document.getElementsByClassName("scifi");
    for (let i = 0; i < scifi.length; i++) {
        scifi[i].style.display = "block";
    }
}

const showFact = () => {
    const fact = document.getElementsByClassName("fact");
    for (let i = 0; i < fact.length; i++) {
        fact[i].style.display = "block";
    }
}
/* ––– HANDLE NAV CLICKS ––– */
const handleViewBooks = () => {
    hideScifi();
    hideFact();
    showBooks();
    view.innerText = "VIEWING BOOKS & COVERS";
}

const handleViewScifi = () => {
    hideBooks();
    hideFact();
    showScifi();
    view.innerText = "VIEWING SCI-FI & FANTASY PROJECTS";
}

const handleViewFact = () => {
    hideBooks();
    hideScifi();
    showFact();
    view.innerText = "VIEWING HISTORY & NATURE PROJECTS";
}

const handleClickLogoName = () => {
    showBooks();
    showScifi();
    showFact();
    view.innerText = "VIEWING ALL PROJECTS";
}


/* ––– ADD EVENT LISTENERS ––– */
viewBooks.addEventListener("click", handleViewBooks);
viewScifi.addEventListener("click", handleViewScifi);
viewFact.addEventListener("click", handleViewFact);
logoName.addEventListener("click", handleClickLogoName);
