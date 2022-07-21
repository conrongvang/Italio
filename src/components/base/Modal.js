import html from "../../core.js";

function Modal(props) {
    return html`
        <div class='modal'>
            ${props}
        </div>
    `;
}

export default Modal;