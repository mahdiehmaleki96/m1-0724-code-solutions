# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  It's primarily done for debugging purposes. It allows developers to monitor the flow of the code, identify and fix bugs, and understand code behavior.
- What is the purpose of events and event handling?
  Events in JavaScript represent actions or occurrences that happen in the browser, such as user interactions (clicks, key presses, etc.), browser actions (loading, resizing), or even custom events.
  Event handling is the process of writing code (event handlers) that executes in response to these events. The purpose is to make web pages interactive and dynamic by responding to user actions or other triggers.
- Are all possible parameters required to use a JavaScript method or function?
  No
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener()
- What is a callback function?
  A callback function is a function that is passed as an argument to another function and is intended to be executed after some kind of event or action has occurred within that function.
- What object is passed into an event listener callback when the event fires?
  When an event fires, an Event object is automatically passed into the event listener's callback function.
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  The event.target is a property of the Event object that refers to the DOM element that triggered the event. For example, if a user clicks on a button, event.target would be the button element.
  To check what event.target is, we can log it to the console inside an event handler.
  we can use browser developer tools to inspect the event object to get more information.
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  This sets up an event listener on element for the click event.
  handleClick is a reference to the function that should be called when the click event occurs.
  The function handleClick will be called only when the click event is triggered.
  ```js
  element.addEventListener('click', handleClick());
  ```
  This immediately calls the handleClick function and passes its return value to addEventListener.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
