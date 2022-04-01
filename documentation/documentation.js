const toggleBtn = document.querySelector("#toggle-btn");
const ul = document.querySelector("ul");
const components = document.querySelector(".components");
const ldBtn = document.querySelector(".ld-btn");
const body = document.querySelector("BODY")
let lightMode = localStorage.getItem('lightMode'); 

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

const enableLightMode = () => {
  document.body.classList.add('light-theme');
  ldBtn.innerHTML = `<i class="chmode fas fa-moon">` + `</i>`
  localStorage.setItem('lightMode', 'enabled');
}
const enableDarkMode = () => {
  document.body.classList.remove('light-theme');
  ldBtn.innerHTML = `<i class="chmode fas fa-sun">`+ `</i>`
  localStorage.setItem('lightMode', null);
}
if (lightMode === 'enabled') {
  enableLightMode();
}
ldBtn.addEventListener('click', () => {
  lightMode = localStorage.getItem('lightMode'); 
  if (lightMode !== 'enabled') {
    enableLightMode();
  } else {  
    enableDarkMode(); 
  }
});

const baselineBtn = document.querySelector(".baseline-btn")
const leadingBtn = document.querySelector(".leading-btn")
const baselineSnackbar = document.querySelector(".baseline-snackbar")
const leadingSnackbar = document.querySelector(".leading-snackbar")
const closeBtn = document.querySelectorAll(".close-btn")
baselineSnackbar.style.display = "none"
leadingSnackbar.style.display = "none"
baselineBtn.addEventListener("click", () => {
  baselineSnackbar.style.display = "flex"
  leadingSnackbar.style.display = "none"
  setTimeout(() => {
    baselineSnackbar.style.display = "none"
  }, 4000)
})
leadingBtn.addEventListener("click", () => {
  leadingSnackbar.style.display = "flex"
  baselineSnackbar.style.display = "none"
  setTimeout(() => {
    leadingSnackbar.style.display = "none"
  }, 4000)
})

for(let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", () => {
    if(baselineSnackbar.style.display === "flex")
      baselineSnackbar.style.display = "none"
    else if(leadingSnackbar.style.display === "flex")
      leadingSnackbar.style.display = "none"
  })
}