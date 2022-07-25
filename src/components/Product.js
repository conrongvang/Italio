import html from "../core.js";

function Product(props) {
    return html`
        <ul class="product">
            <li>
                <img src='${props.src}' width=300 height=300/>
                <span>${props.name}: ${props.price}</span>
                <button
                onclick="dispatch('remove', {
                        key: 'products',
                        id: '${props.index}'
                    })"
                >
                    Remove Product
                </button>
            </li>
        </ul>
    `;
}

export default Product;