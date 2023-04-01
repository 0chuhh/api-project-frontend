import { IUser } from "../../../models/IUser";
import axios from "../axios";
import Cookies from 'js-cookie';


const endpoints = {
    signUp: (email:string, username:string, password:string) => axios.post('sign-up/',{
        email,
        username,
        password
    }).then(result=>{
        Cookies.set('token', result.data.token)
    }),
    getAuthToken: function(username:string, password:string)  {
        const result = axios.post<IUser>('auth-token/',{
            username:username,
            password:password
        }, ).then(result=>{
            Cookies.set('token', result.data.token)
            return {
                email: result.data?.email,
                username: result.data?.username,
                token: result.data?.token,
                roles: result.data?.roles
            }
        })
        return result
    },
    getMe: function() {
        const result = axios.get<IUser>('auth-token/me/').then(result=>{
            return { 
                email: result.data?.email,
                username: result.data?.username,
                token: result.data?.token,
                roles: result.data?.roles
            }
        })
        return result
    }
};

export default endpoints;