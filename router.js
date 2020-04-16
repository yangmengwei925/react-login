import React from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './app'
import Login from './pages/login'
import Admin from './admin'
import Home from './pages/home'
import FromLogin from './pages/formLogin/login'
import FromRegister from './pages/formLogin/register'
import Comment from './pages/comment/index'
export  default class IRouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Switch>
                                <Route path="/admin/home" component={Home}></Route>
                                <Route path="/admin/form/login" component={FromLogin}></Route>
                                <Route path="/admin/form/register" component={FromRegister}></Route>
                                <Route path="/admin/comment" component={Comment}></Route>
                            </Switch>
                        </Admin>
                    }></Route>
                </App>
            </HashRouter>
        )
    }
}