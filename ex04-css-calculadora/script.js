function setupCalculator() {
    const display = document.getElementById('displayScreen');
  
    btnAc.addEventListener('click', () => {
      display.value = '';
      display.style.backgroundColor = '';
    });
    btnDe.addEventListener('click', () => {
      display.value = display.value.toString().slice(0, -1);
    });
  
    btnDot.addEventListener('click', () => {
      display.value += '.';
    });
    btnSlash.addEventListener('click', () => {
      display.value += '/';
    });
    btn7.addEventListener('click', () => {
      display.value += '7';
    });
    btn8.addEventListener('click', () => {
      display.value += '8';
    });
    btn9.addEventListener('click', () => {
      display.value += '9';
    });
    btnStar.addEventListener('click', () => {
      display.value += '*';
    });
    btn4.addEventListener('click', () => {
      display.value += '4';
    });
    btn5.addEventListener('click', () => {
      display.value += '5';
    });
    btn6.addEventListener('click', () => {
      display.value += '6';
    });
    btnDec.addEventListener('click', () => {
      display.value += '-';
    });
    btn1.addEventListener('click', () => {
      display.value += '1';
    });
    btn2.addEventListener('click', () => {
      display.value += '2';
    });
    btn3.addEventListener('click', () => {
      display.value += '3';
    });
    btnInc.addEventListener('click', () => {
      display.value += '+';
    });
    btn00.addEventListener('click', () => {
      display.value += '00';
    });
    btn0.addEventListener('click', () => {
      display.value += '0';
    });
    btnEqual.addEventListener('click', () => {
      const result = eval(display.value);
  
      if (result > 20) {
        display.style.backgroundColor = 'rgba(144, 238, 144, 0.5)';
      } else {
        display.style.backgroundColor = 'rgba(255, 160, 122, 0.5)';
      }
  
      display.value = result;
    });
  }
  
  setupCalculator();
  