import React, { useState} from "react"
import api from '../services/api'

const SignUp = () =>{
    const [email, setEmail] = useState('user5@mail.ru')
    const [login, setLogin] = useState('user5')
    const [password, setPassword] = useState('HelloWorld123')

    const signUp = async () =>{
        await api.auth.signUp(email,login, password)
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