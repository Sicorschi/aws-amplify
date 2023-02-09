import { LitElement, html, css } from 'lit-element';
import './counter';


class HeaderMid extends LitElement {
    static get properties() {
        return {};
    }

    constructor() {
        super();
    }

    static get styles() {
        return css`
      :host {
        display: block;
      }
      div {
        padding: 12px;
        color: white;
        border-radius: 12px;
        text-align: center;
        background: #bdc3c7;
        background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7); 
        background: linear-gradient(to right, #2c3e50, #bdc3c7);
      }
      h3 {
        color: white;
        text-align: center
      }
      .body-structure {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .left {
        width: 50%;
      }
      .click-events {
        width: 45%;
      }
    `;
    }

    render() {
        return html`
            <div class="body-structure">
                <div class="left">
                    <h2>A little more about LitElement</h2>
                    <h4>Templating</h4>
                    <p>
                        Templating in Lit works by writing HTML inside of template literals. Template literals are a type of string which can span multiple lines, ideal for writing HTML.
                    </p>
                </div>
                <my-counter class="click-events"></my-counter>
            </div>
        `;
    }
}

customElements.define('header-mid', HeaderMid);