import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageFrame from './PageFrame';

const Dashboard = React.lazy(() => import('../pages/Dashboard'));

export default function RouteConfig() {
    return (
        <Switch>
            <Route path="/" exact>
                <Dashboard />
            </Route>
            <Route path="/some-page" exact>
                <PageFrame>(empty)</PageFrame>
            </Route>
        </Switch>
    );
}
