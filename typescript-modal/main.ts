const $openModalElement = document.querySelector('.open-modal');
const $dismissModalElement = document.querySelector('.dismiss-modal');
const $dialogElement = document.querySelector('dialog');

if (!$openModalElement) {
  throw new Error('open modal element does not exist');
}

if (!$dismissModalElement) {
  throw new Error('dismiss modal element does not exist');
}

if (!$dialogElement) {
  throw new Error('dialog element does not exist');
}

$openModalElement.addEventListener('click', () => {
  $dialogElement.showModal();
});
$dismissModalElement.addEventListener('click', () => {
  $dialogElement.close();
});
