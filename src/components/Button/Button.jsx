import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const Button = ({value, link,isRounded = false,isBlueRounded=false, isOnlyClick = false, click}) =>{
    if(isRounded){
        return(
            <Link to={link}>
                <div className="buttonRounded">
                    {value}
                </div>
            </Link>
        )
    }else if(isBlueRounded){
        return(
            <Link to={link}>
                <div className="buttonBlueRounded">
                    {value}
                </div>
            </Link>
        )
    }else if( isOnlyClick){
        return(
            <div onClick={click} className="buttonClick">
                {value}
            </div>
        )
    }
    else{
        return(
            <Link to={link}>
                <div className="button">
                    {value}
                </div>
            </Link>
        )
    }
}

export default Button