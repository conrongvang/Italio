import html from "../core.js";

function Product(props) {
    const { name, src, price, index, isCart } = props;

    return html`
        <li class="product">
            <img src='${src}' width=300 height=300/>
            <span>${name}</span>
            <button
                onclick="dispatch('remove', {
                    key: '${!isCart ? 'products' : 'cart'}',
                    id: '${index === 0 ? '0' : index}'
                })"
            >
                ${!isCart ? 'Xóa Sản Phẩm' : 'Xóa Trong Giỏ Hàng'}
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
                Thêm vào giỏ hàng
            </button>`}
           <div id="productDetail " class="navbar__bar--item" onclick="dispatch('display', 'productDetail ')">
           <a href="#" class="content__bar--item link">
           Đọc Tiếp
                                </a>
                                </div>         
        </li>
        
    `;
}

// !isCart && hmtml`...`
// if (isCart === false) {
//  return html`...`;
// } else {
//  return false;  
// }

// isCart || html`...`
// isCart ?? html`...`

// '${isCart ? 'products' : 'cart'}'
// if (isCart === true) {
//     return 'products';
// } else {
//     return 'cart';
// }

export default Product;