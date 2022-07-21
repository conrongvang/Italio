import html from "../core.js";
import { connect } from "../store.js";
import Navbar from "./Navbar/index.js";
import Content from './Content.js'
import Cart from './Cart.js'
import Products from './Products.js'

function App({ display }) {
  const { products, cart, home } = display;

  return html`
    ${Navbar()}
    ${home && Content()}
    ${products && Products()}
    ${cart && Cart()}
  `;
}

export default connect()(App);