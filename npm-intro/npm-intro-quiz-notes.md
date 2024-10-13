# npm-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is NPM?
  NPM (Node Package Manager) is the default package manager for JavaScript's runtime environment, Node.js.
- What is a package?
  A package is a reusable piece of code that can be shared and reused across different projects. It often includes libraries, modules, or tools bundled together to provide specific functionality.
- What are some other popular package managers?
  Yarn, pnpm, Bower, Composer, Pip
- How can you create a `package.json` with `npm`?
  npm init
- What is a dependency and how do you add one to a package?
  A dependency is an external library or package that your project requires to function.
  npm install <package-name>
- What happens when you add a dependency to a package with `npm`?
  NPM fetches the package from the NPM registry.
  The package is installed in the node_modules directory.
  The package version and its name are added to the dependencies section of your package.json file.
  A package-lock.json file is updated (or created) to ensure that the same version of the dependency is installed in the future.
- What is a devDependency and how do you add one to a package?
  A devDependency is a package that is only needed during the development phase (e.g., testing libraries, build tools), but not in production.
  npm install <package-name> --save-dev
- How do you define and run `npm` scripts? Why are these useful?
  in the scripts section of the package.json file.
  Scripts are custom commands that can automate repetitive tasks, such as building the project, running tests, or starting a development server.
  {
  "scripts": {
  "start": "node index.js",
  "test": "jest"
  }
  }

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
