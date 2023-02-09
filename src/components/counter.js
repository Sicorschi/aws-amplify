import { LitElement, html, css } from 'lit-element';
import './feedback-element';

class Counter  extends LitElement {
  static get properties() {
    return {
        counter: { type: Number }
    };
  }

  constructor() {
    super();
    this.counter = 0;
  }

  addClicks() {
    this.counter ++;
    if (this.counter == 5) {
        this.feedback.open('Has llegado a 5 clicks!!');
    }
  }

  get feedback() {
    return this.shadowRoot.getElementById('feedbck');
  }

  countingNumber() {
    return this.counter.toString();
  }

  subtractClicks () {
    this.counter --;
    if (this.counter == 0) {
        this.feedback.open('Has reseteado la cuenta de clicks!!');
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      button {
        width: 100px;
        height: 30px;
        border-radius: 20px;
        background-color: cornflowerblue;
      }
      div {
        margin: auto;
      }
      .count-begin {
        font-size: 23px;
        font-weight: bold;
        color: red;
        text-align: center;
        margin: 32px auto;
        width: 50%;
      }
      .count-iszero {
        font-size: 14px;
        color: blue;
      }
      .btm-btns {
        display: flex;
        justify-content: space-between;
        width: 60%;
      }
      h1 {
        text-align: center;
        color: black;
      }
      .isHotter {
        color: red;
      }
      .isColder {
        color: blue;
      }
      .container-can {
        border-radius: 12px;
        padding: 12px;
        background: #005AA7; 
        background: -webkit-linear-gradient(to right, #FFFDE4, #005AA7); 
        background: linear-gradient(to right, #FFFDE4, #005AA7);
      }
    `;
  }

  render() {
    return html`
      <div class="container-can">
        <h1>LitElements event click!</h1>
        <h1 class="${this.counter > 0 ? 'isHotter' : 'isColder'}">Click: ${this.counter}</h1>
        <div class="btm-btns">
          <button @click="${this.addClicks}"><b>+1</b></button>
          <button @click="${this.subtractClicks}"><b>-1</b></button>
        </div>
        <div>
          <feedback-element id="feedbck"></feedback-element>
        </div>
      </div>
    `;
  }
}

customElements.define('my-counter', Counter);