let bar = document.getElementById("bar")
let ul = document.getElementById("nav-links")
function resNav() {
    if (document.getElementById("nav-link").className === "nav-link", bar.className === "fa-solid fa-bars-staggered") {
        bar.className += ' fa-xmark'
        document.getElementById("nav-link").className += " response"
    } else if (document.getElementById("nav-link").className === "nav-link response", bar.className === "fa-solid fa-bars-staggered fa-xmark") {
        
        bar.className  ="fa-solid fa-bars-staggered"
        document.getElementById("nav-link").className -= " response"
     }
}
bar.addEventListener("click", () => {
    resNav()
})