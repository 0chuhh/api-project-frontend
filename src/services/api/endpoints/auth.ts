import axios from "../axios";
import Cookies from 'js-cookie';
const headers = {

    'Content-Type': 'application/json;charset=utf-8',
    'Accept': '/*/'
}


const endpoints = {
    signUp: (email:string, username:string, password:string) => axios.post('sign-up/',{
        email,
        username,
        password
    }).then(result=>{
        Cookies.set('token', result.data.token)
    }),
    getAuthToken: (username:string, password:string) => axios.post('token-auth/',{
        username:username,
        password:password
    }, ).then(result=>{
        Cookies.set('token', result.data.token)
    })
};

export default endpoints;