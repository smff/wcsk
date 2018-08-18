import DanielInspiration from './one.js';

class SomeComponent extends DanielInspiration {
  constructor() {
    super();
  }

  connectedCallback() {
    this.getNode('amazing').onclick = () => {
      alert('amazing result');
    };
  }

  get css() {
    return `
      p{
        cursor: pointer;
        padding: 21px;
        border: 1px solid red;
        text-align: center;
      }
    `;
  }

  get html() {
    return `<p id="amazing">get an amazing result</p>`;
  }
}

window.customElements.define('some-component', SomeComponent);
