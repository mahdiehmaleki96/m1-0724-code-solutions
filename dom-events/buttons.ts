const $buttonElement = document.querySelector('.click-button');
if (!$buttonElement) {
  throw new Error('button does not exist');
}

function handleClick(event: any): any {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

$buttonElement.addEventListener('click', handleClick);

const $buttonHoverElement = document.querySelector('.hover-button');
if (!$buttonHoverElement) {
  throw new Error('button hover element does not exist');
}

function handleMouseover(event: any): any {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

$buttonHoverElement.addEventListener('mouseover', handleMouseover);

const $buttonDoubleClickElement = document.querySelector(
  '.double-click-button'
);

if (!$buttonDoubleClickElement) {
  throw new Error('double click button does not exist');
}

function handleDoubleClick(event: any): any {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

$buttonDoubleClickElement.addEventListener('dblclick', handleDoubleClick);
