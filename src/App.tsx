import { Global, ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@material-ui/core';
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import PageFrame from './components/PageFrame';
import Dashboard from './pages/Dashboard';
import globalStyles from './styles/global';
import theme from './styles/theme';

export default function App() {
    return (
        <StylesProvider injectFirst>
            <MuiThemeProvider theme={theme}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Global styles={globalStyles} />
                    <BrowserRouter>
                        <Layout>
                            <Switch>
                                <Route path="/" exact>
                                    <Dashboard />
                                </Route>
                                <Route path="/some-page" exact>
                                    <PageFrame>(empty)</PageFrame>
                                </Route>
                            </Switch>
                        </Layout>
                    </BrowserRouter>
                </ThemeProvider>
            </MuiThemeProvider>
        </StylesProvider>
    );
}
