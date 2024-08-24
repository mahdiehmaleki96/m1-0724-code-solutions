# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  Logging to the console is useful for debugging purposes. It allows developers to see the output of their code, track variables, and diagnose issues by providing real-time feedback on what's happening in the application.
- What is a "model"?
  In the context of web development, a "model" refers to an abstract representation or a blueprint of the structure and behavior of data or elements.
- Which "document" is being referred to in the phrase Document Object Model?
  The "document" in the Document Object Model refers to an HTML or XML document that is loaded in the web browser. The DOM provides a structured representation of this document.
- What is the word "object" referring to in the phrase Document Object Model?
  The word "object" in the Document Object Model refers to the elements within the HTML or XML document, which are represented as objects in the DOM. Each element, such as a paragraph or a div, is an object with properties and methods.
- What is a DOM Tree?
  The DOM Tree is a hierarchical structure that represents the HTML or XML document as a tree of nodes. Each node in the tree represents an object corresponding to a part of the document, such as an element, attribute, or text content.
- Give two examples of `document` methods that retrieve a single element from the DOM.
  document.getElementById() retrieves a single element by its ID.
  document.querySelector() retrieves the first element that matches a specified CSS selector.
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  document.querySelectorAll() retrieves all elements that match a specified CSS selector, returning a static NodeList.
- Why might you want to assign the return value of a DOM query to a variable?
  Assigning the return value of a DOM query to a variable allows us to reuse the reference to that element or collection of elements without needing to query the DOM repeatedly, which can improve code readability and performance.
- What `console` method allows you to inspect the properties of a DOM element object?
  The console.dir()
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  Placing the <script> tag at the bottom of the HTML content allows the browser to load and render the HTML content first, improving the page load time and avoiding issues where the script might try to access DOM elements that have not been loaded yet.
- What does `document.querySelector()` take as its argument and what does it return?
  document.querySelector() takes a CSS selector as its argument and returns the first element that matches the selector.
- What does `document.querySelectorAll()` take as its argument and what does it return?
  document.querySelectorAll() takes a CSS selector as its argument and returns a NodeList of all elements that match the selector.

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
