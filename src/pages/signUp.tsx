import React, { useState} from "react"
import api from '../services/api'
import { useAppDispatch } from "hooks/redux"
import { loginUser } from "store/reducers/user/ActionAuth"
import { useNavigate } from "react-router-dom"

const SignUp = () =>{
    const [email, setEmail] = useState('user5@mail.ru')
    const [login, setLogin] = useState('user5')
    const [password, setPassword] = useState('HelloWorld123')
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const signUp = async () =>{
        await api.auth.signUp(email,login, password)
        dispatch(loginUser(login, password))
        navigate(-1)
    }
    return(
        <div className="container" style={{display:'flex', justifyContent:'center', padding:'20%'}}>
            <div className="sign-form">
                <div className="title">Регистрация</div>
                <input className="input" value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder="email"/>
                <input className="input" value={login} onChange={(e)=>setLogin(e.target.value)} type='text' placeholder="login"/>
                <input className="input" value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder="password"/>
                <button onClick={signUp} className="button">Регистрация</button>
            </div>
        </div>
    )
}
export default SignUp