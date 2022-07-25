import storage from '../util/storage.js';

const init = {
  menu: [
    {
      title: 'Trang chủ',
      link: 'https://italio.vn/'
    },
    {
      id: 'about',
      title: 'Về Italio',
      link: 'https://italio.vn/kem/',
      children: [
        {
          id: 'introduce',
          title: 'Giới thiệu',
          link: 'https://italio.vn/gioi-thieu/'
        },
        {
          id: 'ceo',
          title: 'Về CEO',
          link: 'https://italio.vn/ve-ceo-phan-trung-du/'
        }
      ]
    },
    {
      id: 'products',
      title: 'Sản phẩm',
      link: '#',
      children: [
        {
          id: 'cream',
          title: 'Kem',
          link: 'https://italio.vn/gioi-thieu/',
          children: [
            {
              id: 'italio-galento',
              title: 'Italio Galeto',
              link: 'https://italio.vn/italio-gelato/'
            },
            {
              id: 'ferment-cream',
              title: 'Kem lên men',
              link: 'https://italio.vn/kem-len-men/'
            }
          ]
        },
        {
          id: 'flour',
          title: 'Bột',
          link: 'https://italio.vn/bot/',
          children: [
            {
              id: 'flour-make-cream',
              title: 'Bột làm kem',
              link: 'https://italio.vn/bot-lam-kem-cung/'
            },
            {
              id: 'flour-milk-tea',
              title: 'Bột trà sữa',
              link: 'https://italio.vn/bot-tra-sua/'
            }
          ]
        },
        {
          id: 'device',
          title: 'Thiết bị',
          link: 'https://italio.vn/thiet-bi/',
          children: [
            {
              id: 'device-make-cream',
              title: 'Máy làm kem',
              link: 'https://italio.vn/may-lam-kem/'
            },
            {
              id: 'cream-cabinet',
              title: 'Tủ trưng bày kem',
              link: 'https://italio.vn/tu-trung-bay-kem/'
            },
            {
              id: 'device-topping',
              title: 'Dụng cụ - Topping',
              link: 'https://italio.vn/dung-cu-quan-kem/'
            },
            {
              id: 'cabinet-cake',
              title: 'Tủ trưng bày bánh',
              link: 'https://italio.vn/tu-trung-bay-banh/'
            }
          ]
        },
        {
          id: 'italio-cake-kitchen',
          title: 'Bếp bánh Italio',
          link: 'https://italio.vn/cung-cap-banh-ngot-cho-quan-cafe/'
        }
      ]
    },
    {
      id: 'model',
      title: 'Mô hình',
      link: 'https://italio.vn/mo-hinh-italio'
    },
    {
      id: 'knownledge',
      title: 'Kiến thức F&B',
      link: 'https://italio.vn/kinh-nghiem-kem/'
    },
    {
      id: 'contact',
      title: 'Liên hệ',
      link: 'https://italio.vn/lien-he/'
    },
    {
      id: 'project',
      title: 'Dự án',
      link: 'https://italio.vn/du-an-kem-tuoi/'
    }
  ],
  home: {
    ownerProducts: [
      'https://italio.vn/wp-content/uploads/2021/08/icon.png',
      'https://italio.vn/wp-content/uploads/2021/07/icon2.png',
      'https://italio.vn/wp-content/uploads/2021/07/Icon-2.png',
      'https://italio.vn/wp-content/uploads/2021/07/icon-.png'
    ],
    productionIntroduce:[
      'https://italio.vn/wp-content/uploads/2021/08/italio-decor-1.jpg',
      'https://italio.vn/wp-content/uploads/2021/04/1.png'
    ],
  },
  products: storage.get('products') || [],
  cart: storage.get('cart') || [],
  display: {
    products: false,
    cart: false,
    home: true
  }
};

const actions = {
  add(state, { key, data }) {
    state[key] = [
      ...state[key],
      data
    ];
    storage.set(key, state[key]);
  },
  remove(state, { key, id }) {
    state[key] = state[key].filter((_i, index) => index !== Number(id));
    storage.set(key, state[key]);
  },
  display(state, payload) {
    for (const property in state.display) {
      if (property === payload) {
        state.display[property] = true;
      } else {
        state.display[property] = false;
      }
    }
  }
};

export default function reducer(state = init, action, args) {
  actions[action] && actions[action](state, ...args);
  return state;
}
