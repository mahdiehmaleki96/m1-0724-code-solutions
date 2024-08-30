interface formElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $contactForm = document.querySelector<HTMLFormElement>('form');

if (!$contactForm) {
  throw new Error('contact form does not exist');
}

$contactForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const $formElements = $contactForm.elements as formElements;

  const formData = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };

  console.log('formData:', formData);
});
