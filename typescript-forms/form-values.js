'use strict';
const $contactForm = document.querySelector('form');
if (!$contactForm) {
  throw new Error('contact form does not exist');
}
$contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $contactForm.elements;
  const formData = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('formData:', formData);
});
