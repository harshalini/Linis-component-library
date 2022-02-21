const ldBtn = document.querySelector(".ld-btn");
const body = document.querySelector("BODY")
let lightMode = localStorage.getItem('lightMode'); 

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
