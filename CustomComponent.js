// root class for custom components
export default class CustomComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = this.shadowRootInnerHtml;
  }

  // function to get node in shadow root of custom element
  getNode(node) {
    return this.shadowRoot.getElementById(node);
  }

  // function to update content of node in shadow root
  updateNodeContent(node, content) {
    this.getNode(node).innerHTML = content;
  }

  // getter for style for custom element
  get css() {
    return '';
  }

  // getter for markup for custom element
  get html() {
    return '';
  }

  // custom element collector
  get shadowRootInnerHtml() {
    return `
        <style>
            ${this.css}
        </style>
            ${this.html}
        `;
  }
}
