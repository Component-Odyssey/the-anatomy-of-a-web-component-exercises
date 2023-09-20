# Exercise 2: Create a Web Component

The purpose of this exercise to create a web component that retains the same markup structure as the existing album cover HTML.

You'll also need to replace all of the existing HTML element with your shiny new web component.

You'll need to create two functions:

- `constructor()`
- `connectedCallback()`

## Note

We won't be applying styles in this exercise, so your album covers should be displayed, but the propertions will be wrong. As long as you can see the images and the text, then everything is fine!

## Constructor

In the constructor you'll need to attach a shadow DOM to the `album art` component. You'll need to get the markup for the template and append it to the shadow root.

## Connected Callback

In the connectedCallback lifecycle method, you'll need to access the `img`, `h3`, and `p` element and set the values for all the required attributes.

You'll need to account for the following attributes

## Tips

- Don't forget to call `super()` in the constructor
- Don't forget to extend the `HTMLElement` inteface when creating your AlbumArt class
- Don't forget to register your web component when you've finished writing the code
- Double check that the attribute names are spelled correctly.
- Ensure that all values have been copy and pasted over correctly, is the tests check these

Once you've implemented everything correctly, all the tests should pass.
