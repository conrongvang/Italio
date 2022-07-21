const ITALIO_STORAGE_KEY = 'ITALIO';

let store = localStorage.getItem(ITALIO_STORAGE_KEY);

if (!store) {
    store = localStorage.setItem(
        ITALIO_STORAGE_KEY,
        JSON.stringify({
            products: [],
            cart: []
        })
    );
}

const data = JSON.parse(store);

export default {
    get(key) {
        return data ? data[key] : null;
    },
    set(key, payload) {
        localStorage.setItem(
            ITALIO_STORAGE_KEY,
            JSON.stringify({
                ...data,
                [key]: payload
            })
        );
    },
    clear() {
        localStorage.removeItem(ITALIO_STORAGE_KEY);
    }
};