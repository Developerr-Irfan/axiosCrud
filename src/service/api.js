import axios from "axios";

export const api = axios.create(
    {
        baseURL : "http://www.omdbapi.com",
        params : {
            apikey : "b1e9c8e7"
        }   
    }
);