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
        const search_endpoint = "https://localhost:7237/api/JobListings"
        const response = await fetch(search_endpoint, {method: "GET"})
        console.log(response)
        const json_response = await response.json()
        console.log(json_response)
    }
}