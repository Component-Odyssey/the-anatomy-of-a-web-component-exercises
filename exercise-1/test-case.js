const template = document.createElement('template');

template.innerHTML = `
  <style>

  </style>

  <div id="test-case">
    <p>
      <span id="indicator"></span>
      <span id="description"><span>
    </p>
  </div>
`

class TestCase extends HTMLElement {
  static observedAttributes = ['pass'];

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.appendChild(template.content.cloneNode(true));
  }


  connectedCallback() {
    const indicator = this.shadowRoot.querySelector('#indicator');
    const state = this.shadowRoot.querySelector('#state');
    const description = this.shadowRoot.querySelector('#description');

    const pass = this.getAttribute('pass')
    const testDescription = this.getAttribute('description')

    console.log(pass)


    description.textContent = testDescription;
    indicator.textContent = '❌';

    if (pass) {
      indicator.textContent = '✅';
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'pass') {
      const indicator = this.shadowRoot.querySelector('#indicator');

      if (newValue === 'true') {
        indicator.textContent = '✅';
      }
    }
  }
}

customElements.define('test-case', TestCase);