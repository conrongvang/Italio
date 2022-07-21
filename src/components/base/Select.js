import html from "../../core.js";
import Modal from "./Modal.js";

function Select(props) {
    const { id, level, link, title, children } = props;

    const selectId = `select-${id}`;
    const className = 'select ' + `${level}`;

    return html`
        <div
            id='${selectId}'
            class='${className}'
            title=${'select-menu-item-level-' + level}
        >
            <a href=${link}>${title}</a>
            ${
                children && children.length
                && Modal(children.map(c => html`${Select({ ...c, level: level + 1 })}`))
            }
            ${
                children && children.length
                && '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
            }
        </div>
    `;
}

export default Select;