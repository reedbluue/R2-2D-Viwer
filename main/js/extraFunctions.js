import { ThemeController } from "./controllers/ThemeController.js";

const $ = document.querySelector.bind(document);

const loaderContent = $('.loader__content');
const body = $('body');

const themeButton = $('.theme-button');

body.style.overflow = 'none';

let themeController = new ThemeController();

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  themeController.toDark();
  themeController.status = 0;
  themeButton.classList.remove('sun');
  themeButton.classList.add('moon');
} else {
  themeController.toLight();
  themeController.status = 1;
  themeButton.classList.remove('moon');
  themeButton.classList.add('sun');
}

function changeTheme() {
  if(themeController.status) {
    themeController.toDark();
    themeController.status = 0;
    themeButton.classList.remove('sun');
    themeButton.classList.add('moon');
  } else {
    themeController.toLight();
    themeController.status = 1;
    themeButton.classList.remove('moon');
    themeButton.classList.add('sun');
  }
}

themeButton.addEventListener('click', () => {
  changeTheme();
});

window.addEventListener('load', () => {
  setTimeout(() =>{
    loaderContent.style.display = 'none';
    body.style.overflow = 'initial';
  }, 2000);
});