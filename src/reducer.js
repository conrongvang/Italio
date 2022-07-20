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
      id: 'product',
      title: 'Sản phẩm',
      link: 'https://italio.vn/cua-hang/',
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
              linhk: 'https://italio.vn/tu-trung-bay-banh/'
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
  products: storage.get('products') || [],
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

  }
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
