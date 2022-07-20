import html from "../../core.js";

function Select(props) {
    const { level, link, title, children } = props;

    return html`
        <div class=select title=${'select-menu-item-level-' + level}>
            <a href=${link}>${title}</a>
            ${
                children && children.length
                && children.map(c =>
                    html`${Select({ ...c, level: level + 1 })}`
                )
                && '<i class="fa fa-arrow-down" aria-hidden="true"></i>'
            }
        </div>
    `;
}

export default Select;