import html from "../core.js";
import { connect } from "../store.js";
import Product from "./Product.js";

function Cart({ cart }) {
    return html`
        <div class="cart">
            <ul class="products">
                ${cart.map((p, index) => Product({ ...p, index, isCart: true }))}
            </ul>
        </div>
    `;
}

export default connect()(Cart);