import { LitElement, html, css} from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('search-form')
export class SearchForm extends LitElement {

  @property()
  accessor searchTerm: string = '';

  static styles = css`
    :host {
      display: block;
    }
    input {
      padding: 8px;
      font-size: 16px;
      margin-right: 8px;
    }
    button {
      padding: 8px 16px;
      font-size: 16px;
      background-color: #007bff;
      color: #ffffff;
      border: none;
      cursor: pointer;
    }
  `;

  protected render() {
    return html`
      <form @submit=${this._handleSubmit}>
        <input id='keywordSearchField' type="text" .value=${this.searchTerm} placeholder="Search...">
        <button type="submit">Search</button>
      </form>
    `;
  }

  private _handleSubmit(event: Event) {
    event.preventDefault()
    const searchField = this.shadowRoot!.getElementById("keywordSearchField") as HTMLInputElement;
    const searchQuery = searchField.value.trim();
    if (searchQuery != "") {
      console.log(searchQuery)
      this.dispatchEvent(new CustomEvent<string>("search", {detail: searchQuery}));
    }
  } 
}