import React from 'react';

import { Route, BrowserRouter } from 'react-router-dom';
import Cadastro from './pages/Cadastro/cadastro';
import Home from './pages/Home/index';
import Login from './pages/Login/login';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/index" />
            <Route component={Login} path="/" exact />
            <Route component={Cadastro} path="/cadastro" />
        </BrowserRouter>
    );
}

export default Routes;
