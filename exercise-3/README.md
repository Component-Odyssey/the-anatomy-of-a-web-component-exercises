# Exercise 2: Styling Your Web Component

For this exercise, you'll need to ensure that the CSS is available to your component in the shadow DOM.

By default styles can't pass the shadow boundary, so we need to be clever about how we make these styles available.

## `<style>`

You can use the `<style>` component within a template and it won't affect the DOM outside of the template element.

You can use this along with the `import url();` CSS function to import an external stylesheet. 

Combine this knowledge and import the two CSS files within the `template`.