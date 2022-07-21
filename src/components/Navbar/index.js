import html from "../../core.js";
import { connect } from "../../store.js";
import Select from '../base/Select.js'
import Modal from '../base/Modal.js'

function Navbar({ menu, cart }) {
    return html`
        <div class='navbar'>
            <div class='navbar__introduce'>
                <p>Italio - Nhà sản xuất kem chuyên cung cấp kem Ý, kem cao cấp, máy làm kem,...</p>
                <div class='navbar__introduce--try-free'>
                    <a href='https://italio.vn/'>Dùng Thử Miễn Phí</a>
                </div>
            </div>
            <div class='navbar__bar'>
                <img
                    class='navbar__bar--logo'
                    src='https://italio.vn/wp-content/uploads/2021/05/logooo-90x55.png'
                    onclick="dispatch('display', 'home')"
                ></img>
                <div class='navbar__bar--menu'>
                    ${(menu || []).map(i => {
                        return html`
                            <div
                                ${i.id ? `id=${i.id}` : ''}
                                class='navbar__bar--item'
                                onclick="dispatch('display', '${i.id}')"
                            >
                                <a href=${i.link || '#'} class='navbar__bar--item link'>
                                    ${i.title}
                                </a>
                                ${i.children && i.children.length && html`
                                    ${Modal(i.children.map(c => Select({ ...c, level: 1 })))}
                                    <i class="fa fa-arrow-down" aria-hidden="true"></i>
                                `}
                            </div>
                        `;
                    })}
                </div>
                <div
                    class='navbar__bar--cart'
                    onclick="dispatch('display', 'cart')"
                >
                    <i class="fa fa-suitcase" aria-hidden="true"></i>
                    <span>
                        ${
                            cart.length < 10
                            ? `0${cart.length !== 0 ? cart.length : ''}`
                            : cart.length
                        }
                    </span>
                </div>
            </div>
        </div>
    `;
}

export default connect()(Navbar);