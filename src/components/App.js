import html from "../core.js";
import { connect } from "../store.js";
import Navbar from "./Navbar.js";
import Content from './Content.js'

const connector = connect();

function App() {
  return html`
    ${Navbar()}
    ${Content()}
  `;
}

export default connector(App);