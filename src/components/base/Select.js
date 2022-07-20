import html from "../../core.js";

function Select(props) {
    return html`
        <div class='select'>
            <a href=${props.link}>${props.title}</a>
        </div>
    `;
}

export default Select;