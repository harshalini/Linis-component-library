const toggleBtn = document.querySelector("#toggle-btn");
const ul = document.querySelector("ul");
const components = document.querySelector(".components");

toggleBtn.addEventListener("click", ()=> {
    ul.style.transition = ".5s ease";
    if(ul.style.display === "none") {
        ul.style.display = "flex";
        toggleBtn.style.marginLeft = "14.5rem";
        components.style.opacity = "30%";
    }
    else {
        ul.style.display = "none";
        toggleBtn.style.marginLeft = "0";
        components.style.opacity = "100%";
    }
})

ul.addEventListener("click", ()=> {
    ul.style.display = "none";
    components.style.opacity = "100%"
    toggleBtn.style.marginLeft = "0";
})