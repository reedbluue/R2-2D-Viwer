const $ = document.querySelector.bind(document);

const loaderContent = $('.loader__content');
const body = $('body');

body.style.overflow = 'none';

window.addEventListener('load', () => {
  setTimeout(() =>{
    loaderContent.style.display = 'none';
    body.style.overflow = 'initial';
  }, 0);
});