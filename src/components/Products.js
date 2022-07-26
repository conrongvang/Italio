import html from "../core.js";
import { connect } from "../store.js";
import Product from "./Product.js";

function Products({ products }) {
    return html`
        <div class="products-wrapper">
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
            <ul class="products">
                ${products.map((p, index) => Product({ ...p, index }))}
            <ul>
        </div>
    `;
}

export default connect()(Products);