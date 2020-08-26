import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Login.css'
import TextInput from '../../components/Text/TextInput'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import config from '../../config'

const LogIn = () =>{
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[emailError,setEmailError] = useState(false)
    const[emailErrorText, setEmailErrorText] = useState('')
    const[passwordError, setPasswordError] = useState(false)
    const[passwordErrorText, setPasswordErrorText] = useState('')

    const login = () =>{
        Axios.post(`http://localhost:3001/signin`, {
            email: email,
            password: password
        })
        .then(()=>{
            alert('logged')
        })
        .catch(err => {
            setPasswordErrorText('Credenciales erroneas')
            setPasswordError(true)
        })
    }

    return(
        <div className="login">
            
            <Navbar full={false}/>

            <div className="loginMid">
                <div className="loginMidCard">
                    <div className="loginMidCardText">    
                        <h1 className="loginMidCardTextH1">Iniciar Sesión</h1>
                        <h3 className="loginMidCardTextH3">Ya tienes cuenta? Adelante!</h3>
                    </div>

                    <div>
                        <TextInput value="Correo Electrónico" placeholder="Ej: usuario@mail.com" onchange={setEmail.bind(this)} isError={emailError} error={emailErrorText}/>
                        <TextInput value="Contraseña" placeholder="Contraseña" onchange={setPassword.bind(this)} password={true} isError={passwordError} error={passwordErrorText}/>
                    </div>

                    <div className="loginMidCardBottom">
                        <Button value="Iniciar Sesión" isOnlyClick={true} click={login}/>

                        <div className="loginMidCardBottomLinks">
                            <Link to="/recover">
                                <h3 className="loginMidCardBottomLink">Olvidaste tu contraseña? RESTABLECER</h3>
                            </Link>

                            <Link to="/signup">
                                <h3 className="loginMidCardBottomLink">No tenes cuenta? CREAR CUENTA</h3>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default LogIn