import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './SignUp.css'
import TextInput from '../../components/Text/TextInput'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import url from '../../config'


const SignUp = () =>{

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[emailError,setEmailError] = useState(false)
    const[emailErrorText, setEmailErrorText] = useState('')
    const[passwordError, setPasswordError] = useState(false)
    const[passwordErrorText, setPasswordErrorText] = useState('')
    const[checkbox,setCheckbox] = useState(false) 

    const signUp = () =>{
        if(checkbox){
            if(password.length < 8 && email.length > 5){
                setPasswordErrorText('La contrasena debe contener al menos 8 caracteres')
                setPasswordError(true);
            }else{
                Axios.post(`${url}/signup`, {
                    email: email,
                    password: password
                })
                .then(()=>{
                    const now = new Date();
                    now.setTime(now.getTime() + 1 * 3600 * 1000);
                    document.cookie = `email=${email}; expires="${now.toUTCString()}"; path=/`;
                    window.location.href = `http://localhost:3000/signup/sent`
                })
                .catch(err => alert(err))
            }
        }else{
            alert("Acepta los terminos y condiciones de uso antes de continuar")
        }
    }

    return(
        <div className="signup">
            
            <Navbar full={false}/>

            <div className="loginMid">
                <div className="loginMidCard">
                    <div className="loginMidCardText">    
                        <h1 className="loginMidCardTextH1">Crear Cuenta</h1>
                        <h3 className="loginMidCardTextH3">Solo datos necesarios.</h3>
                    </div>

                    <div>
                        <TextInput value="Correo Electrónico" placeholder="Ej: usuario@mail.com" onchange={setEmail.bind(this)} isError={emailError} error={emailErrorText}/>
                        <TextInput value="Contraseña" placeholder="Contraseña" onchange={setPassword.bind(this)} password={true} isError={passwordError} error={passwordErrorText}/>
                    </div>

                    <div className="loginMidCardBottom">
                        <div className="signUpCheckboxText">
                            <input type="checkbox" className="signUpCheckbox" onChange={e => setCheckbox(e.target.value)}/>
                            <label className="signUpCheckboxLabel">He leído y acepto las <Link to="/privacity" className="loginMidCardBottomLink">políticas de privacidad</Link>, <Link to="/terms" className="loginMidCardBottomLink">términos y condiciones de uso</Link>.</label>
                        </div>
                        <Button value="Crear Cuenta" isOnlyClick={true} click={signUp}/>

                        <div className="loginMidCardBottomLinks">
                            <Link to="/login">
                                <h3 className="loginMidCardBottomLink">Ya tienes una Cuenta? INICIAR SESION</h3>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default SignUp