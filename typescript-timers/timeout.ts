const heading = document.querySelector('h1');

setTimeout((): void => {
  if (heading) {
    heading.textContent = 'Hello There';
  }
}, 2000);
