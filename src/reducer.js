import storage from '../util/storage.js';

const init = {
  products: storage.get('products') || []
  // products: [
  //   {
  //     name: 'cream',
  //     price: 50000
  //   },
  //   {
  //     name: 'flour',
  //     price: 20000
  //   }
  // ]
};

const actions = {
  add(state, payload) {
    if (state && state.products && payload) {
      state.products.push({ payload });
      storage.set(state.products);
    }
  }
};

export default function reducer(state = init, action, args) {
  actions[action] && actions[action](state, ...args);
  return state;
  // switch (action) {
  //   case "ADD":
  //     const [title] = args;
  //     return {
  //       ...state,
  //       products: [
  //         ...state.products,
  //         {
  //           title
  //         }
  //       ]
  //     };
  //   default:
  //     return state;
  // }
}
