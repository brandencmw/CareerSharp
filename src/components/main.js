var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./search-form.js";
let App = (() => {
    let _classDecorators = [customElement('search-page')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    let _instanceExtraInitializers = [];
    let _searchResults_decorators;
    let _searchResults_initializers = [];
    var App = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _searchResults_decorators = [property()];
            __esDecorate(this, null, _searchResults_decorators, { kind: "accessor", name: "searchResults", static: false, private: false, access: { has: obj => "searchResults" in obj, get: obj => obj.searchResults, set: (obj, value) => { obj.searchResults = value; } }, metadata: _metadata }, _searchResults_initializers, _instanceExtraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            App = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        #searchResults_accessor_storage = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _searchResults_initializers, []));
        get searchResults() { return this.#searchResults_accessor_storage; }
        set searchResults(value) { this.#searchResults_accessor_storage = value; }
        render() {
            return html `
        <search-form @search=${this._handleSearch}></search-form>
        `;
        }
        async _handleSearch(event) {
            console.log(event.detail);
            const search_endpoint = "https://localhost:7237/api/JobListings";
            const response = await fetch(search_endpoint, { method: "GET" });
            console.log(response);
            const json_response = await response.json();
            console.log(json_response);
        }
    };
    return App = _classThis;
})();
export { App };
