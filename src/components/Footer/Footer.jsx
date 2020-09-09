import React from 'react'
import OCFrameworkwhite from '../../assets/OCFrameworkwhite.png'
import TextInput from '../Text/TextInput'
import './Footer.css'
import Linker from '../Linker/Linker'
import { Link } from 'react-router-dom'

const Footer = () =>{

    const links = [{value: 'Sobre Nosotros', link: '/us'}, {value: 'Términos y Condiciones', link: '/terms'}, {value: 'Políticas de privacidad', link: '/privacity'}, {value:'Reportar errores', link:'/error'},{value:'Precios', link:'/pricing'}]
    const _links = [{value: 'Iniciar Sesión', link: '/login'},{value: 'Crear Cuenta', link: '/signup'}, {value: 'Restablecer Cuenta', link:'/recover'}, {value: 'Incógnito', link:'/incognite'}]

    return (
        <div className="footer">
            <div className="footerHolder">

                <Link to="/">
                    <img src={OCFrameworkwhite} className="logo"/>
                </Link>

                <div>
                    {links.map((value,key)=>{
                        return(
                            <Linker value={value.value} link={value.link} key={key}/>
                        )
                    })}
                </div>

                <div>
                {_links.map((value,key)=>{
                        return(
                            <Linker value={value.value} link={value.link} key={key}/>
                        )
                    })}
                </div>

                <div className="emailing">
                    <div className="text">
                    <h3 className="textH3">Recibe notificaciones importantes antes que nadie!</h3>
                    <div className="footerEmailText">
                        <input type="text" placeholder="Correo Electrónico" className="textInput"/>
                        <div className="footerEmailTextButton">
                            Enviar!
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Footer