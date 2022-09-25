// Declarando constantes globais
const planContainer = document.querySelector('.plan-container');
const r2Plan = document.querySelector('.r2-plan');

const arrastePlano = () => {

  // Lógica de arraste do plano

  let cursorTopPosition = 0, cursorLeftPosition = 0;

  r2Plan.addEventListener('mousedown', dragStartMouse); // evento clique do mouse

  function dragStartMouse(e) { // ao clicar o mouse
    cursorLeftPosition = e.pageX - r2Plan.offsetLeft;  // posição x cursor
    cursorTopPosition = e.pageY - r2Plan.offsetTop; // posição y cursor

    addEventListener('mouseup', dragStopMouse); // evento fim do clique do mouse
    addEventListener('mousemove', dragMoveMouse); // evento mover o mouse
  }

  function dragMoveMouse(e) { // ao mover o mouse
    r2Plan.style.left = `${e.pageX - cursorLeftPosition}px`; // atualiza o valor da posição x do plano
    r2Plan.style.top = `${e.pageY - cursorTopPosition}px`;  // atualiza o valor da posição y do plano

    let r2Left = r2Plan.offsetLeft; // posição x do plano
    let r2Right = r2Plan.offsetLeft + r2Plan.offsetWidth; // posição y do plano

    // definição de limites

    if (r2Left > 0) {
      r2Plan.style.left = `0px`;
      cursorLeftPosition = e.pageX - r2Plan.offsetLeft;
    }

    if (r2Right < planContainer.offsetWidth) {
      r2Plan.style.left = `${planContainer.offsetWidth - r2Plan.offsetWidth}px`;
      cursorLeftPosition = e.pageX - r2Plan.offsetLeft;
    }

    let r2Top = r2Plan.offsetTop;
    let r2Bottom = r2Plan.offsetTop + r2Plan.offsetHeight;

    if (r2Top > 0) {
      r2Plan.style.top = `0px`;
      cursorTopPosition = e.pageY - r2Plan.offsetTop;
    }

    if (r2Bottom < planContainer.offsetHeight) {
      r2Plan.style.top = `${planContainer.offsetHeight - r2Plan.offsetHeight}px`;
      cursorTopPosition = e.pageY - r2Plan.offsetTop;
    }
  
  }

  function dragStopMouse() {
    removeEventListener('mouseup', dragStopMouse); // remove o evento fim do clique do mouse
    removeEventListener('mousemove', dragMoveMouse); // remove o evento mover o mouse
  }

  r2Plan.addEventListener('touchstart', dragStartTouch); // evento touch da tela

  function dragStartTouch(e) { // ao tocar na tela
    cursorLeftPosition = e.touches[0].pageX - r2Plan.offsetLeft; // atualiza o valor da posição x do plano
    cursorTopPosition = e.touches[0].pageY - r2Plan.offsetTop; // atualiza o valor da posição y do plano

    addEventListener('touchstop', dragStopTouch); // evento fim do touch na tela
    addEventListener('touchmove', dragMoveTouch); // evento move touch na tela
  }

  function dragMoveTouch(e) { // ao mover o touch na tela
    r2Plan.style.left = `${e.touches[0].pageX - cursorLeftPosition}px`;  // atualiza o valor da posição x do plano
    r2Plan.style.top = `${e.touches[0].pageY - cursorTopPosition}px`;  // atualiza o valor da posição y do plano

    let r2Left = r2Plan.offsetLeft; // posição x do plano
    let r2Right = r2Plan.offsetLeft + r2Plan.offsetWidth;  // posição y do plano

    // definição de limites

    if (r2Left > 0) {
      r2Plan.style.left = `0px`;
      cursorLeftPosition = e.touches[0].pageX - r2Plan.offsetLeft;
    }

    if (r2Right < planContainer.offsetWidth) {
      r2Plan.style.left = `${planContainer.offsetWidth - r2Plan.offsetWidth}px`;
      cursorLeftPosition = e.touches[0].pageX - r2Plan.offsetLeft;
    }

    let r2Top = r2Plan.offsetTop;
    let r2Bottom = r2Plan.offsetTop + r2Plan.offsetHeight;

    if (r2Top > 0) {
      r2Plan.style.top = `0px`;
      cursorTopPosition = e.touches[0].pageY - r2Plan.offsetTop;
    }

    if (r2Bottom < planContainer.offsetHeight) {
      r2Plan.style.top = `${planContainer.offsetHeight - r2Plan.offsetHeight}px`;
      cursorTopPosition = e.touches[0].pageY - r2Plan.offsetTop;
    }
  
  }

  function dragStopTouch() {
    removeEventListener('touchstop', dragStopTouch);  // remove o evento fim do touch
    removeEventListener('touchmove', dragMoveTouch);  // remove o evento mover o touch
  }

}

export default arrastePlano;