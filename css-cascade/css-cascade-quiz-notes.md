# css-cascade-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the four components of "the Cascade".
  Importance
  Specificity
  Source Order
  Inheritance
- What does the term "source order" mean with respect to CSS?
  Source order refers to the order in which CSS rules are listed in the stylesheet. If two or more rules apply to the same element and have the same specificity and importance, the rule that appears last in the CSS file will be applied.
- How is it possible for the styles of an element to be applied to its children as well without an additional CSS rule?
  happens through inheritance.
- List the three selector types in order of increasing specificity.
  Type selectors (e.g., div, p)
  Class selectors (e.g., .class-name)
  ID selectors (e.g., #id-name)
- Why is using `!important` considered bad practice?
  because it breaks the normal flow of the CSS cascade, making debugging and maintaining the styles more difficult. Also, It can make the CSS more rigid and less flexible,

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
