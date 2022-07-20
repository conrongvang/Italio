import html from "../../core.js";

function Select(props) {
    const { className, level, link, title, children } = props;

    return html`
        <div class=select title=${'select-menu-item-level-' + level}>
            <a href=${link}>${title}</a>
            ${
                children && children.length
                && children.map(c =>
                    html`${Select({ ...c, level: level + 1 })}`
                )
            }
        </div>
    `;
}

export default Select;