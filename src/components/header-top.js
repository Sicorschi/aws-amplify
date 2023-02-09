import { LitElement, html, css } from 'lit-element';
import '@graviton/dropdown';

class HeaderTop  extends LitElement {
  static get properties() {
    return {
        title: { type: String },
        msg: { tye: String }
    };
  }

  constructor() {
    super();
    this.title = `
        Di amigo y pasaras!
    `;
    this.msg = `
        The first person to reach the words builded the world.
    `
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      h1 {
        font-size: 32px;
        font-weight: bold;
        color: cornflowerblue;
      }
      h4 {
        font-size: 14px;
        color: black;
      }
    `;
  }

  render() {
    return html`
        <h1>${this.title}</h1>
        <h4>${this.msg}</h4>
    `;
  }
}

customElements.define('header-top', HeaderTop);