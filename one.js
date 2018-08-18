export default class DanielInspiration extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = this.shadowRootInnerHtml;
  }

  getNode(node) {
    return this.shadowRoot.getElementById(node);
  }

  updateNodeContent(node, content) {
    this.getNode(node).innerHTML = content;
  }

  get css() {
    return '';
  }

  get html() {
    return '';
  }

  get shadowRootInnerHtml() {
    return `
        <style>
            ${this.css}
        </style>
            ${this.html}
        `;
  }
}
