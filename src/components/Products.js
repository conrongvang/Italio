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
                        price: 50000,
                        src: 'https://italio.vn/wp-content/uploads/2021/08/icon.png'
                    }
                })"
            >
                Add Product
            </button>
            ${products.map((p, index) => Product({ ...p, index }))}
        </div>
    `;
}

export default connect()(Products);