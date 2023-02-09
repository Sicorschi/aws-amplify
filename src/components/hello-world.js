import { LitElement, html, css } from 'lit-element';

class Hello  extends LitElement {

  static get properties() {
    return {
        who: { type: String }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      h3, p {
        width: 30%;
        margin: 25px auto;
        padding: 32px;
        background-color: coral;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <h3>
        Hello ${this.who}
      </h3>
      <p>From Index Page</p>
    `;
  }
}

customElements.define('hello-world', Hello);