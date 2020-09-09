import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/navbar/Navbar'

const Dashboard = () =>{
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <div>
            <Navbar full={false} dashboard={true}/>
            <div>

            </div>

            <div>

            </div>

            <div>

            </div>

            <Footer/>
        </div>
    )
}

export default Dashboard