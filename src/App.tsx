import { Global, ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@material-ui/core';
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import PageLoadingIndicator from './components/PageLoadingIndicator';
import GameForm from './pages/GameForm';
import GameList from './pages/GameList';
import globalStyles from './styles/global';
import theme from './styles/theme';

// const waitForMs = (delay = 0) => new Promise(resolve => setTimeout(resolve, delay));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

const queryClient = new QueryClient({ defaultOptions: { queries: { suspense: true } } });

export default function App() {
    return (
        <StylesProvider injectFirst>
            <MuiThemeProvider theme={theme}>
                <ThemeProvider theme={theme}>
                    <QueryClientProvider client={queryClient}>
                        <CssBaseline />
                        <Global styles={globalStyles} />
                        <BrowserRouter>
                            <Layout>
                                <Suspense fallback={<PageLoadingIndicator />}>
                                    <Switch>
                                        <Route path="/" exact>
                                            <Dashboard />
                                        </Route>
                                        <Route path="/games/new">
                                            <GameForm />
                                        </Route>
                                        <Route path="/games">
                                            <GameList />
                                        </Route>
                                    </Switch>
                                </Suspense>
                            </Layout>
                        </BrowserRouter>
                    </QueryClientProvider>
                </ThemeProvider>
            </MuiThemeProvider>
        </StylesProvider>
    );
}
