import storage from '../util/storage.js';

const init = {
  menu: [
    {
      title: 'Trang chủ',
      link: 'https://italio.vn/'
    },
    {
      title: 'Về Italio',
      link: 'https://italio.vn/kem/',
      children: [
        {
          title: 'Giới thiệu',
          link: 'https://italio.vn/gioi-thieu/'
        },
        {
          title: 'Về CEO',
          link: 'https://italio.vn/ve-ceo-phan-trung-du/'
        }
      ]
    },
    {
      title: 'Sản phẩm',
      link: 'https://italio.vn/cua-hang/',
      children: [
        {
          title: 'Kem',
          link: 'https://italio.vn/gioi-thieu/',
          children: [
            {
              title: 'Italio Galeto',
              link: 'https://italio.vn/italio-gelato/'
            },
            {
              title: 'Kem lên men',
              link: 'https://italio.vn/kem-len-men/'
            }
          ]
        },
        {
          title: 'Bột',
          link: 'https://italio.vn/bot/',
          children: [
            {
              title: 'Bột làm kem',
              link: 'https://italio.vn/bot-lam-kem-cung/'
            },
            {
              title: 'Bột trà sữa',
              link: 'https://italio.vn/bot-tra-sua/'
            }
          ]
        },
        {
          title: 'Thiết bị',
          link: 'https://italio.vn/thiet-bi/',
          children: [
            {
              title: 'Máy làm kem',
              link: 'https://italio.vn/may-lam-kem/'
            },
            {
              title: 'Tủ trưng bày kem',
              link: 'https://italio.vn/tu-trung-bay-kem/'
            },
            {
              title: 'Dụng cụ - Topping',
              link: 'https://italio.vn/dung-cu-quan-kem/'
            },
            {
              title: 'Tủ trưng bày bánh',
              linhk: 'https://italio.vn/tu-trung-bay-banh/'
            }
          ]
        },
        {
          title: 'Bếp bánh Italio',
          link: 'https://italio.vn/cung-cap-banh-ngot-cho-quan-cafe/'
        }
      ]
    },
    {
      title: 'Mô hình',
      link: 'https://italio.vn/mo-hinh-italio'
    },
    {
      title: 'Kiến thức F&B',
      link: 'https://italio.vn/kinh-nghiem-kem/'
    },
    {
      title: 'Liên hệ',
      link: 'https://italio.vn/lien-he/'
    },
    {
      title: 'Dự án',
      link: 'https://italio.vn/du-an-kem-tuoi/'
    }
  ],
  products: storage.get('products') || []
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
