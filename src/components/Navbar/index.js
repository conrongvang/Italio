import html from "../../core.js";
import { connect } from "../../store.js";

/*
    function () {}
    <==>
    () => {} --> arrow function

    C1: function ten_ham() {
        // Do something
    }

    C2: const ten_ham = () => {}


    menu.map(function (value, index) {

    })
    <==>
    for (let i = 0; i < menu.length; i++) {
        menu[i] <==> value
        i <==> index
        // Do something
    }
*/

function Navbar({ menu }) {
    return html`
        <div class='navbar'>
            <div class='navbar__introduce'>
                <p>Italio - Nhà sản xuất kem chuyên cung cấp kem Ý, kem cao cấp, máy làm kem,...</p>
                <div class='navbar__introduce--try-free'>
                    <a href='https://italio.vn/'>Dùng Thử Miễn Phí</a>
                </div>
            </div>
            <div class='navbar__bar'>
                <img class='navbar__bar--logo' src='https://italio.vn/wp-content/uploads/2021/05/logooo-90x55.png'></img>
                <div class='menu'>
                    ${(menu || []).map(i => html`
                        <div ${i.id ? `title=${i.id}` : ''} class='menu__item'>
                            <a href=${i.link || '#'} class='menu__item--link'>
                                ${i.title}
                            </a>
                            ${i.children && i.children.length
                                && i.children.map(c => Select({ ...c, level: 1 }))
                            }
                        </div>
                    `)}
                </div>
                <i class="fa fa-shopping-bag" style="font-size:36px;"></i>
            </div>
        </div>
    `;
}

export default connect()(Navbar);