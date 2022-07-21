import html from "../core.js";
import { connect } from "../store.js";
import Product from "./Product.js";

function Products({ products }) {
    return html`
        <div class="products">
            <button
                onclick="dispatch('add', {
                    key: 'products',
                    data: {
                        name: 'Kem bạc hà',
                        price: 50000
                    }
                })"
            >
                Add Product
            </button>
            ${products.map(p => Product(p))}
        </div>
    `;
}

export default connect()(Products);