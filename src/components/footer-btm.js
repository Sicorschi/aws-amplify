import { LitElement, html, css } from 'lit-element';

const footerTemplate = html`
  <footer>Made with love by <a href="https://open-wc.org/">Open Web Components</a></footer>
`;

class FooterBtm  extends LitElement {
  static get properties() {
    return {
     todos: { type: Array }
    };
  }

  constructor() {
    super();
    this.todos = [
      {
        text: 'Do A',
        fininshed: true
      }, 
      {
        text: 'Do B',
        finished: false
      }, {
        text: 'Do C',
        finished: true
      }
    ];
  }

  _addNew() {
    const input = this.shadowRoot.getElementById('addTodoInput');
    const text = input.value;
    input.value = '';
  
    this.todos.push({ text, finished: false });
    console.log(text, this.todos);
    this.requestUpdate();
  }

  _removeOne(todo) {
    this.todos = this.todos.filter(e => e !== todo);
    console.log(this.todos);
    this.requestUpdate();
  }

  _changeTodoFinished(e, changedTodo) {
    const finished = e.target.checked;
  
    this.todos = this.todos.map((todo) => {
      if (todo !== changedTodo) {
        return todo;
      }
      return { ...changedTodo, finished };
    });
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      li {
        width: 40%;
      }
      .content-body {
        width: 15%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `;
  }

  render() {
    return html`
      <input id="addTodoInput" placeholder="Name" />
      <button @click="${this._addNew}">Add</button>
      <ol>${this.todos.map( todo => html`
        <div class="content-body">
          <li>
            <input
              type="checkbox"
              .checked=${todo.finished ? true : false}
              @change=${e => this._changeTodoFinished(e, todo)}
            />
            ${todo.text}
            <button @click=${() => this._removeOne(todo)}>X</button>
      </li>
        </div>
          `,
        )}
      </ol>
      ${footerTemplate}
    `;
  }
}

customElements.define('footer-btm', FooterBtm);