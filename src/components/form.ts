import {LitElement, html} from 'lit-element';
import {customElement, property} from 'lit/decorators.js';

@customElement('search-form')
export class SearchForm extends LitElement {

    @property()
    accessor title: string = "Hello World";
    render() {
        return html`
        <p>${this.title}</p>
        `
    }
}