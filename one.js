export default class DanielInspiration extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = this.shaddowRootInnerHtml;
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

  get shaddowRootInnerHtml() {
    return `
        <style>
            ${this.css}
        </style>
            ${this.html}
        `;
  }
}