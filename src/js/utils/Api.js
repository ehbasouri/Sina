import Axios from 'axios'

const BASE_URL = "https://api.punkapi.com/v2"

export const getBeers=(page, perpage)=>{
    return Promise.resolve(Axios.get(`${BASE_URL}/beers?page=${page}&per_page=${perpage}`));
}