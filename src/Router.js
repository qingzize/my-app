import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home_Collapse from './Home_Collapse';
import Detail from './Detail';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home_Collapse}/>
            <Route exact path="/Detail/:id" component={Detail}/>
        </Switch>
    </HashRouter>
);

export default BasicRoute;