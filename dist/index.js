/** @format */
import { html, css, LitElement } from "lit";
/**
 * @element
 * @summary
 */
export default class MyComponent extends LitElement {
    static get styles() {
        return css `
			:host {
				box-sizing: border-box;
				display: inline-block;
			}

			*,
			*::after,
			*::before {
				box-sizing: inherit;
			}
		`;
    }
    render() {
        return html `<slot></slot>`;
    }
}
window.customElements.define("", MyComponent);
//# sourceMappingURL=index.js.map