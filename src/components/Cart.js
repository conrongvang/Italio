import html from "../core.js";
import { connect } from "../store.js";
import Product from "./Product.js";

function Cart({ cart, products }) {
    return html`
        <div class="cart">
            ${products.map(p => Product(p))}
        </div>
    `;
}

export default connect()(Cart);