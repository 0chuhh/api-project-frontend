import React, { useEffect, useState } from "react";
import api from '../services/api'
import { IsAuthentificted } from "../services/utils/isAuthentificated";
import { loginUser } from "../store/reducers/ActionCreators";
import { useAppDispatch } from "../hooks/redux";
const SignIn = () =>{
    const [login, setLogin] = useState('user1')
    const [password, setPassword] = useState('HelloWorld123')
    const dispatch = useAppDispatch()
    useEffect(()=>{
        console.log(IsAuthentificted())
    },[])

    const auth = () =>{
        dispatch(loginUser(login, password))
    }

    return(
        <div className="container">
            <div className="card">
                <div className="title">Авторизация</div>
                <input className="input" value={login} onChange={(e)=>setLogin(e.target.value)} type='text' placeholder="login"/>
                <input className="input" value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder="password"/>
                <button onClick={auth} className="button">Войти</button>
            </div>
        </div>
    )
}
export default SignIn