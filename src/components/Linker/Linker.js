import React from 'react'
import { Link } from 'react-router-dom'
import './Linker.css'

const Linker = ({value, link}) =>{
    return(
        <Link to={link}>
            <div className="linker">
                {value}
            </div>
        </Link>
    )
}

export default Linker