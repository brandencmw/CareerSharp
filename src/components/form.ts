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

  handleSearch(event: Event) {
    const input = (event.target as HTMLInputElement);
    this.searchTerm = input.value;
    // Do something with the search term, like trigger a search
  }

  render() {
    return html`
      <form @submit=${this._handleSearch}>
        <input type="text" .value=${this.searchTerm} @input=${this.handleSearch} placeholder="Search...">
        <button type="submit">Search</button>
      </form>
    `;
  }

  private _handleSearch(event: Event) {
    event.preventDefault()
    console.log("This is called")
  } 
}