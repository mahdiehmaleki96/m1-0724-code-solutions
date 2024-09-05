# dom-manipulation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `className` property of element objects?
  It is a string that represents the value of the class attribute of that element.
- How do you update the CSS class attribute of an element using JavaScript?
  by setting the className property of the element.
- What is the `textContent` property of element objects?
  The textContent property represents the text content of an element and all its descendants. It returns a string of all the text within the element, excluding any HTML tags.
- How do you update the text within an element using JavaScript?
  by setting the textContent property:
- Is the `event` parameter of an event listener callback always useful?
  is often useful as it provides information about the event that was triggered, such as the type of event, the target element, and additional event-specific details.
- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?
  It would be more complicated. Without a variable, you would need to find other ways to track and maintain state, which could involve more complex logic or reliance on the DOM, making the code less straightforward.
- Why is storing information about a program in variables better than only storing it in the DOM?
  because of the Performance that accessing and manipulating variables is faster than interacting with the DOM, which can be slower and less efficient.
  Simplicity: Variables offer a simpler and more direct way to manage program state and logic., Readability, and Reusability.

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
