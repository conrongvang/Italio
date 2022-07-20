import html from "../core.js";
import { connect } from "../store.js";
import Navbar from "./Navbar/index.js";
import Content from './Content.js'

function App() {
  return html`
    ${Navbar()}
    ${Content()}
  `;
}

export default connect()(App);