import html from "../../core.js";
import { connect } from "../../store.js";
import Select from '../base/Select.js';

function Navbar({ menu }) {
    return html`
        <div class='navbar'>
            <div class='introduce'>
                <p>Italio - Nhà sản xuất kem chuyên cung cấp kem Ý, kem cao cấp, máy làm kem,...</p>
                <a href='https://https://italio.vn/'>Dùng thử miễn phí</a>
            </div>
            <div class='menu'>
                ${menu.map(i => {
                    let children = [];
                    if (i.children && i.children.length) {
                        children = [...i.children];
                    }

                    return `
                    <a href=${i.link}>
                        ${i.title}
                    </a>
                    ${children.map(c => Select(c))}
                `})}
            </div>
        </div>
    `;
}

export default connect()(Navbar);