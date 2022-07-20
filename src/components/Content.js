import html from "../core.js";
import { connect } from "../store.js";
import Product from "./Navbar/Product.js";

function Content(props) {
    return html`
        <div class='content'>
            Nội dung trang web
            ${props && props.products && props.products.map(p => Product(p))}
        </div>
    `;
}

export default connect()(Content);