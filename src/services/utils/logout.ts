import React from "react";
import Cookies from 'js-cookie';
export const Logout = () =>{
    Cookies.remove('token')
}