import { css } from '@emotion/react';
import {
    AppBar,
    Divider,
    Drawer,
    Link,
    Theme,
    Toolbar,
    Typography,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import AppNav from './AppNav';
import GameCounter from './GameCounter';

const styles = {
    appBar: (theme: Theme) => css`
        width: calc(100% - ${theme.settings.sidebarWidth}px);
        margin-left: ${theme.settings.sidebarWidth}px;
        transition: width ease 0.2s, margin ease 0.2s;
        background: ${theme.palette.primary.light};
        z-index: ${theme.zIndex.drawer + 1};
    `,
    appTitle: css`
        flex-grow: 1;
        .MuiLink-root {
            text-decoration: none;
        }
    `,
    toolbar: css`
        padding-right: 24px;
    `,
    drawer: (theme: Theme) => css`
        .MuiDrawer-paper {
            position: relative;
            width: ${theme.settings.sidebarWidth}px;
            background: linear-gradient(
                to bottom,
                ${theme.palette.aside.main},
                ${theme.palette.aside.dark}
            );
            color: ${theme.palette.aside.contrastText};
            transition: width ease 0.2s, margin ease 0.2s;
        }
        .MuiSvgIcon-root {
            color: ${theme.palette.aside.contrastText};
        }
    `,
    drawerTop: css`
        min-height: 4rem;
    `,
};

export default function AppFrame() {
    return (
        <>
            <AppBar position="absolute" css={styles.appBar}>
                <Toolbar css={styles.toolbar}>
                    <Typography
                        css={styles.appTitle}
                        component="h1"
                        variant="h6"
                        color="inherit"
                    >
                        <Link component={RouterLink} to="/" color="inherit">
                            Workshop App
                        </Link>
                    </Typography>
                    <GameCounter />
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" css={styles.drawer}>
                <div css={styles.drawerTop} />
                <Divider />
                <AppNav />
            </Drawer>
        </>
    );
}
