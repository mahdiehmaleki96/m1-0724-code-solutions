'use strict';
function handleFocus(event) {
  console.log('focus event was fired');
  const eventTarget = event.target;
  console.log(eventTarget.name);
}
function handleBlur(event) {
  console.log('blur event was fired');
  const eventTarget = event.target;
  console.log(eventTarget.name);
}
function handleInput(event) {
  const eventTarget = event.target;
  console.log('event.target.name: ', eventTarget.name);
  console.log('event.target.value: ', eventTarget.value);
}
const $input1 = document.querySelector('#user-name');
const $input2 = document.querySelector('#user-email');
const $textarea = document.querySelector('#user-message');
if (!$input1) {
  throw new Error('input1 does not exist');
}
if (!$input2) {
  throw new Error('input2 does not exist');
}
if (!$textarea) {
  throw new Error('textarea does not exist');
}
$input1.addEventListener('focus', handleFocus);
$input1.addEventListener('blur', handleBlur);
$input1.addEventListener('input', handleInput);
$input2.addEventListener('focus', handleFocus);
$input2.addEventListener('blur', handleBlur);
$input2.addEventListener('input', handleInput);
$textarea.addEventListener('focus', handleFocus);
$textarea.addEventListener('blur', handleBlur);
$textarea.addEventListener('input', handleInput);
