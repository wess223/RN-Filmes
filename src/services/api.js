import axios from "axios";

// movie/now_playing?api_key=2553f0abd665428edb078cb397fec65f&language=pt-BR&page=1
export const key = '2553f0abd665428edb078cb397fec65f';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;