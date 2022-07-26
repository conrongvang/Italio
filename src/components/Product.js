import html from "../core.js";

function Product(props) {
    const { name, src, price, index, isCart } = props;

    return html`
        <li class="product">
            <img src='${src}' width=300 height=300/>
            <span>${name}: ${price}</span>
            <button
                onclick="dispatch('remove', {
                    key: '${!isCart ? 'products' : 'cart'}',
                    id: '${index === 0 ? '0' : index}'
                })"
            >
                ${!isCart ? 'Remove Product' : 'Unselect this product'}
            </button>
            ${!isCart
            && html`<button
                onclick="dispatch('add', {
                    key: '${isCart ? 'products' : 'cart'}',
                    data: {
                        name: '${name}',
                        price: '${price}',
                        src: '${src}'
                    }
                })"
            >
                Add to cart
            </button>`}

        </li>
    `;
}

export default Product;