import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import LogIn from './pages/login/Login'
import NotFound from './pages/404/NotFound'
import SignUp from './pages/signup/SignUp'
import Recover from './pages/recovery/Recovery'
import EmailSent from './pages/emailSent/EmailSent'
import Privacity from './pages/privacity/Privacity'
import Prices from './pages/prices/Prices'

const Router = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route exact path="/login" component={LogIn}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/recover" component={Recover}/>
                <Route exact path="/privacity" component={Privacity}/>
                <Route exact path="/pricing" component={Prices}/>
                <Route exact path="/signup/sent" component={EmailSent}/>
                <Route path='/404' component={NotFound} />
                <Redirect from='*' to='/404' />
            </Switch>
        </BrowserRouter>
    )
}

export default Router