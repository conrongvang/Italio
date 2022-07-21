import html from "../core.js";

function Product(props) {
    return html`
        <ul>
            <li>${props.name}: ${props.price}</li>
        </ul>
    `;
}

export default Product;