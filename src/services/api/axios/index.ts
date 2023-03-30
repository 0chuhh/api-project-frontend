import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8081/api/v1/",
    headers:{
        "Authorization": Cookies.get('token') && `Token ${Cookies.get('token')}`
    }
});

export default axiosInstance;