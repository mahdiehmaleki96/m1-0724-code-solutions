# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  The async and await keywords are used to write asynchronous code in a more readable and synchronous-like manner. allowing us to avoid chaining .then() and .catch() and instead write code that looks sequential, though it runs asynchronously.
  async: Declares a function to be asynchronous, which means it returns a Promise implicitly.
  await: Pauses the execution of an async function until the awaited promise settles (resolves or rejects).
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  async/await:
  Code is written in a more imperative style, making it easier to read and maintain.
  Error handling is typically done using try/catch.
  Sequential asynchronous operations can be written in a more readable form without chaining.
  Promise.then/catch:
  Promises are handled through chaining .then() for resolved results and .catch() for errors.
  It can become complex with deeply nested promises and hard to maintain with multiple .then() chains.
  Error handling can be done via .catch(), but it might be less intuitive in deeply nested promise chains.
- When do you use `async`?
  We use async when we want to define a function that performs asynchronous operations and returns a promise.
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  We use await when we want to pause the execution of an async function until a promise resolves or rejects. We do not use await with synchronous functions, as it has no effect.
- How do you handle errors with `await`?
  by wrapping the await call inside a try/catch block. If the promise is rejected, the error will be caught in the catch block.
- What do `try`, `catch` and `throw` do? When do you use them?
  try: Defines a block of code to be tested for errors while it is being executed.
  catch: Defines a block of code to handle any errors that may have occurred in the try block.
  throw: Allows you to manually throw an error, which can be caught by a catch block.
  We use try/catch in async functions to handle errors from await operations or anywhere we expect errors might occur. throw is used when we want to signal an error intentionally, either custom errors or re-throwing caught errors.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  he function will continue execution without waiting for the promise to resolve or reject. The promise will be returned unhandled, and any rejection will be silent unless caught somewhere else.
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  I prefer async/await because it provides a cleaner, more readable, and more maintainable code structure compared to callbacks or chained promises.

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
