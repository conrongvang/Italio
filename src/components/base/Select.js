import html from "../../core.js";

function Select(props) {
    const { id, level, link, title, children } = props;

    const selectId = `select-${id}`;
    const className = 'select ' + `${level}`;
// document.getElementById(selectId).children[0].querySelector('.select')
    return html`
        <div
            id='${selectId}'
            class='${className}'
            title=${'select-menu-item-level-' + level}
        >
            <a href=${link}>${title}</a>
            ${
                children && children.length
                && children.map(c =>
                    html`${Select({ ...c, level: level + 1 })}`
                )
            }
            ${
                children && children.length
                && '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
            }
        </div>
    `;
}

// onmouseover='(() => {
//     const children = [...this.children];
//     children.forEach(c => {
//         c.style.display = "block";
//     });
// })(this)'
export default Select;