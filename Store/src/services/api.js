import axios from "axios";

const api  = axios.create({
    baseUrl: "http://localhost:1337/api",

});

export default api; 