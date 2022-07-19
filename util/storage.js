const ITALIO_STORAGE_KEY = 'ITALIO';

const data = JSON.parse(localStorage.getItem(ITALIO_STORAGE_KEY));

export default {
    get(key) {
        return data ? data[key] : null
    },
    set(data) {
        localStorage.setItem(ITALIO_STORAGE_KEY, JSON.stringify(data))
    }
};