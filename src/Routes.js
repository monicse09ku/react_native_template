import React, { Component } from 'react';

import { Router, Stack, Scene } from 'react-native-router-flux';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Forgot from "./pages/Forgot";

export default class Routes extends Component {

    render(){
        return (
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={Login} title="Login"/>
                    <Scene key="home" component={Home} title="Home" initial={true} />
                    <Scene key="forgot" component={Forgot} title="Forgot"/>
                    
                </Stack>
            </Router>
        )
    }

}
