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

/* ––– VIEWS ––– */

const viewingBooks = () => {
    hideScifi();
    hideFact();
    showBooks();
    view.innerText = "VIEWING BOOKS & COVERS";
}

const viewingScifi = () => {
    hideBooks();
    hideFact();
    showScifi();
    view.innerText = "VIEWING SCI-FI & FANTASY PROJECTS";
}

const viewingFact = () => {
    hideBooks();
    hideScifi();
    showFact();
    view.innerText = "VIEWING HISTORY & NATURE PROJECTS";
}

const viewingAll = () => {
    showBooks();
    showScifi();
    showFact();
    view.innerText = "VIEWING ALL PROJECTS";
}



function checkView() {
    let viewing = sessionStorage.getItem("viewing");
    if (viewing == "scifi") {
        viewingScifi(); 
    }
    else if (viewing == "books") {
        viewingBooks();
    }
    else if (viewing == "fact") {
        viewingFact();
    }
    else if (viewing == "all") {
        viewingAll();
    }
    else if (viewing == null) {
        viewingAll();
    }
}

/* ––– HANDLE NAV CLICKS ––– */
const handleViewBooks = () => {
    viewingBooks();
    sessionStorage.setItem("viewing", "books");
}

const handleViewScifi = () => {
    viewingScifi();
    sessionStorage.setItem("viewing", "scifi");
}

const handleViewFact = () => {
    viewingFact();
    sessionStorage.setItem("viewing", "fact");
}

const handleClickLogoName = () => {
    viewingAll();
    sessionStorage.setItem("viewing", "all");
}


/* ––– ADD EVENT LISTENERS ––– */
viewBooks.addEventListener("click", handleViewBooks);
viewScifi.addEventListener("click", handleViewScifi);
viewFact.addEventListener("click", handleViewFact);
logoName.addEventListener("click", handleClickLogoName);
