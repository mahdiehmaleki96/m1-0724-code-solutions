const lightbulb = document.querySelector('#lightbulb');

lightbulb?.addEventListener('click', () => {
  if (lightbulb.classList.contains('off')) {
    lightbulb.classList.remove('off');
    lightbulb.classList.add('on');
    document.body.style.backgroundColor = '#ffffcc';
  } else {
    lightbulb.classList.remove('on');
    lightbulb.classList.add('off');
    document.body.style.backgroundColor = '#333';
  }
});
