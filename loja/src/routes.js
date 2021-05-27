import React from 'react';
import Home from './Telas/Home/index'
import Produtos from './Telas/Av/index'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/Home' component={Home} />
            <Route exact path='/' component={Produtos} />
        </Switch>
    </BrowserRouter>
);

export default Routes;