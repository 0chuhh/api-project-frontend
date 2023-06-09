import React, { useEffect, useState } from "react";
import api from '../services/api'
import { IsAuthentificted } from "../services/utils/isAuthentificated";
import { loginUser } from "../store/reducers/user/ActionAuth";
import { useAppDispatch } from "../hooks/redux";
import { Link, useNavigate } from "react-router-dom";
const SignIn = () =>{
    const [login, setLogin] = useState('user1')
    const [password, setPassword] = useState('HelloWorld123')
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    useEffect(()=>{
        console.log(IsAuthentificted())
    },[])

    const auth = () =>{
        dispatch(loginUser(login, password))
        navigate(-1)
    }

    return(
        <div className="container" style={{display:'flex', justifyContent:'center', padding:'20%'}}>
            <div className="sign-form"> 
                <div className="title">Авторизация</div>
                <input className="input" value={login} onChange={(e)=>setLogin(e.target.value)} type='text' placeholder="login"/>
                <input className="input" value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder="password"/>
                <button onClick={auth} className="button">Войти</button>
                <div style={{fontSize:'12px'}}>Нет аккаунта? <Link to='/sign-up'>Зарегистрируйтесь</Link></div>
            </div>
        </div>
    )
}
export default SignIn