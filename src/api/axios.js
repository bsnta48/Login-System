import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export default (url) => {
    get: axios({
        method: 'get',
        url: `${BASE_URL}${url}`
    })
}