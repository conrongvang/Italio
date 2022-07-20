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
            <div class='introduce'>
                <p>Italio - Nhà sản xuất kem chuyên cung cấp kem Ý, kem cao cấp, máy làm kem,...</p>
                <a href='https://https://italio.vn/'>Dùng thử miễn phí</a>
            </div>
            <div class='menu'>
            <i class="fa fa-shopping-bag" style="font-size:36px;"></i>
                ${menu.map(i => {
                    let children = [];
                    if (i.children && i.children.length) {
                        children = [...i.children];
                    }

                    return `
                        <div>
                            <a href=${i.link}>
                                ${i.title}
                            </a>
                        </div>
                    `;
                })}
            </div>
        </div>
    `;
}

export default connect()(Navbar);