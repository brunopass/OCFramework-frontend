import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Incognite.css'
import Footer from '../../components/Footer/Footer'
import Axios from 'axios'
import url from '../../config'
import TextInput from '../../components/Text/TextInput'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'


const IncogniteSignUp = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    const getId = () => {
        return Axios.get(`${url}/incognite/id`)
    }

    getId()
    .then(data => {
        console.log(data.data)
    })
    .catch(err => {

    })

    const login = () =>{
        
    }

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[emailError,setEmailError] = useState(false)
    const[emailErrorText, setEmailErrorText] = useState('')
    const[passwordError, setPasswordError] = useState(false)
    const[passwordErrorText, setPasswordErrorText] = useState('')

    return(
        <div className="incogniteSignUp">
            <Navbar full={false}/>
            <div className="incogniteMid">
                
            <div className="loginMidCard">
                    <div className="loginMidCardText">    
                        <h1 className="loginMidCardTextH1">Incognito</h1>
                        <h3 className="loginMidCardTextH3">Ya tienes cuenta? Adelante!</h3>
                    </div>

                    <div>
                        <TextInput value="Token" placeholder="token" onchange={setEmail.bind(this)} isError={emailError} error={emailErrorText}/>
                        <TextInput value="Contraseña" placeholder="Contraseña" onchange={setPassword.bind(this)} password={true} isError={passwordError} error={passwordErrorText}/>
                    </div>

                    <div className="loginMidCardBottom">
                        <Button value="Iniciar Sesión" isOnlyClick={true} click={login}/>

                        <div className="loginMidCardBottomLinks">
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

export default IncogniteSignUp