import React, {useEffect, useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import TextInput from '../../components/Text/TextInput'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'

const Recover = () =>{

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const[email,setEmail] = useState('')
    const[emailError,setEmailError] = useState(false)
    const[emailErrorText, setEmailErrorText] = useState('')

    const recovery = () =>{

    }

    return(
        <div className="recovery">
            <Navbar full={false}/>

            <div className="loginMid">
                <div className="recoveryMidCard">
                    <div className="loginMidCardText">    
                        <h1 className="loginMidCardTextH1">Restablecer</h1>
                        <h3 className="loginMidCardTextH3">Te enviaremos un correo para restablecer tu contraseña.</h3>
                    </div>

                    <div>
                        <TextInput value="Correo Electrónico" placeholder="Ej: usuario@mail.com" onchange={setEmail.bind(this)} isError={emailError} error={emailErrorText}/>
                    </div>

                    <div className="loginMidCardBottom">
                        <Button value="Restablecer" isOnlyClick={true} click={recovery}/>

                        <div className="loginMidCardBottomLinks">
                            <Link to="/login">
                                <h3 className="loginMidCardBottomLink">Ya tienes una Cuenta? INICIAR SESION</h3>
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

export default Recover