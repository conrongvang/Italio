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
                        name: 'Đậu Xanh',
                        price:'',

                        src: 'https://italio.vn/wp-content/uploads/2021/04/dau-xanh_6088da4363e87-300x300.jpeg',
                        description: 'ccccc',
                        detail: {
                            type: 'dmm',
                        }
                    }
                })"
            >
               
            </button>
            <ul class="products">
                ${products.map((p, index) => Product({ ...p, index }))}
            <ul>
        </div>
    `;
}

// spread operator       // Add Product
// let p = {
//   name: 'cc',
//   price: 300
// };
// let obj = {};
// obj = Objects.value(obj, p);
// <=> obj = { ...p, index: index };
// obj = {
//   name: 'cc',
//   price: 300,
//   index: ...
// };
// khac voi obj = p;

export default connect()(Products);