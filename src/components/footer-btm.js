import { LitElement, html, css } from 'lit-element';

const footerTemplate = html`
  <footer>Made with love by <a href="https://open-wc.org/">open-wc</a></footer>
`;

class FooterBtm  extends LitElement {
  static get properties() {
    return {
     
    };
  }

  constructor() {
    super();
    this.todos = ['Do A', 'Do B', 'Do C'];
  }

  _addNew() {
    const input = this.shadowRoot.getElementById('addTodoInput');
    const text = input.value;
    input.value = '';
  
    this.todos.push({ text, finished: false });
    console.log(text, this.todos);
    this.requestUpdate();
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render() {
    return html`
      <input id="addTodoInput" placeholder="Name" />
      <button @click="${this._addNew}">Add</button>
      <ol>${this.todos.map( todo => html`
        <li>${todo.text ? todo.text : todo}</li>
          `,
        )}
      </ol>
      ${footerTemplate}
    `;
  }
}

customElements.define('footer-btm', FooterBtm);