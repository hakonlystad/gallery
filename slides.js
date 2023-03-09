const prosjekter = ["meantime.html", "flamingo.html", "bombchoc.html", "blich.html", "bloodthief.html", "galactic.html", "shrike.html", "mara.html", "deal.html", "weeds.html", "eidsvoll.html", "pyro.html"];
const kategorier = {
    meantime: ["books"], 
    flamingo: ["books"],
    bombchoc: ["books"], 
    blich: ["fact"], 
    bloodthief: ["scifi"],
    galactic: ["scifi"],
    shrike: ["scifi"], 
    mara: ["fact"], 
    deal: ["scifi"], 
    weeds: ["scifi"], 
    eidsvoll: ["books", "fact"], 
    pyro: ["scifi"]
}

const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

const extractName = (page) => {
    const name = page.split(".").shift();
    return name;
}

const findNextPage = () => {
    const pages = prosjekter.length;
    const currentTheme = sessionStorage.getItem("viewing");
    console.log(currentTheme);
    const current = document.URL.split("/").pop();
    let nextIndex = prosjekter.indexOf(current) + 1;
    if (nextIndex >= pages) {nextIndex = 0}
    let i = 0;
    while (i < pages*2) {
        console.log(i);
        if (currentTheme == "all" || currentTheme == null) {break};
        let nextName = extractName(prosjekter[nextIndex]);
        console.log(nextName);
        if (kategorier[nextName].includes(currentTheme)) {break};
        nextIndex++;
        if (nextIndex >= pages) {nextIndex = 0};
        i++;
    }
    const nextPage = prosjekter[nextIndex];
    return nextPage; 
}

const findPrevPage = () => {
    const pages = prosjekter.length;
    const currentTheme = sessionStorage.getItem("viewing");
    console.log(currentTheme);
    const current = document.URL.split("/").pop();
    let prevIndex = prosjekter.indexOf(current) - 1;
    if (prevIndex < 0) {prevIndex = pages - 1}
    let i = 0;
    while (i < pages*2) {
        console.log(i);
        if (currentTheme == "all" || currentTheme == null) {break};
        let prevName = extractName(prosjekter[prevIndex]);
        console.log(prevName);
        if (kategorier[prevName].includes(currentTheme)) {break};
        prevIndex--;
        if (prevIndex < 0) {prevIndex = pages - 1};
        i++;
    }
    const prevPage = prosjekter[prevIndex];
    return prevPage; 
}

const goNextPage = () => {
    const nextUrl = findNextPage();
    location.href = nextUrl;
}

const goPrevPage = () => {
    const prevUrl = findPrevPage();
    location.href = prevUrl;
}

rightArrow.addEventListener("click", goNextPage);
leftArrow.addEventListener("click", goPrevPage);

document.addEventListener("keydown", (event) => {
    if (event.code == "ArrowRight") {goNextPage()}
})

document.addEventListener("keydown", (event) => {
    if (event.code == "ArrowLeft") {goPrevPage()}
})