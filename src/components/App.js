import html from "../core.js";
import { connect } from "../store.js";
import Navbar from "./Navbar/index.js";
import Content from './Content.js'

function App() {
  return html`
    ${Navbar()}
    ${Content()}
    ${undefined}
    ${null}
    ${0}
    ${NaN}
  `;
}

export default connect()(App);