import axios from "axios";

export default axios.create(
    {
        baseURL: 'https://pokeapi.co/api/v2/',
        responseType: 'json',
        timeout: 6000
    }
)