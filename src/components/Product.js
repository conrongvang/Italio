import html from "../core.js";

function Product(props) {
    console.log('props:', props)
    return html`
        <li class="product">
            <img src='${props.src}' width=300 height=300/>
            <span>${props.name}: ${props.price}</span>
            <button
                onclick="dispatch('remove', {
                    key: 'cart',
                    id: '${props.index}'
                })"
            >
                ${!props.isCart ? 'Remove Product' : 'Unselect this product'}
            </button>
            ${!props.isCart
            && html`<button
                onclick="dispatch('add', {
                    key: ${!props.isCart ? 'products' : 'cart'},
                    data: {
                        name: '${props.name}',
                        price: '${props.price}',
                        src: '${props.src}'
                    }
                })"
            >
                Add to cart
            </button>`}

        </li>
    `;
}

export default Product;