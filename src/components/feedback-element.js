import { LitElement, html, css} from "lit-element";

class Feedback extends LitElement {
    static get properties() {
        return {
            msg: { type: String },
            opened: { type: Boolean },
        }
    }

    static get styles() {
        return css`
          :host {
            display: block;
          }
          div {
            position: fixed;
            border-radius: 10px;
            bottom: 0px;
            left: 0px;
            overflow: hidden;
            height: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #36D1DC;
            background: -webkit-linear-gradient(to right, #5B86E5, #36D1DC);
            background: linear-gradient(to right, #5B86E5, #36D1DC);
            color: white;
            width: 100%;
            transition: all 0.7s ease-in;
            font-size: 1px
          }

          .opened {
            height: 100px;
            font-size: 2em;
          }
        `;
    }
    
    open(msg) {
        this.msg = msg;
        this.opened = true;

        setTimeout(() => {
            this.opened = false;
        }, 3000)
    }
    
      render() {
        return html`
            <div class="${this.opened ? 'opened' : ''}">
                ${this.msg}
            </div>
        
        `
    }
}

customElements.define('feedback-element', Feedback);