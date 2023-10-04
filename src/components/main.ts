import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./search-form.js"

@customElement('search-page')
export class App extends LitElement {

    @property()
    accessor searchResults = []

    protected render() {
        return html`
        <search-form @search=${this._handleSearch}></search-form>
        `
    }

    private async _handleSearch(event: CustomEvent) {
        console.log(event.detail)
    }
}