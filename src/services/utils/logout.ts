import React from "react";
import Cookies from 'js-cookie';
import { AppDispatch } from "../../store";
import { userSlice } from "../../store/reducers/UserSlice";
export const Logout = () =>(dispatch:AppDispatch)=>{
    dispatch(userSlice.actions.userLogout())
    Cookies.remove('token')
}