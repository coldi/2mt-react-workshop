import { css } from '@emotion/react';
import { Divider, List, ListSubheader, Theme } from '@material-ui/core';
import AppNavItem from './AppNavItem';

const styles = {
    listHeader: (theme: Theme) => css`
        color: ${theme.palette.aside.contrastText};
    `,
};

function withHeader(label: string) {
    return <ListSubheader css={styles.listHeader}>{label}</ListSubheader>;
}

export default function AppNav() {
    return (
        <nav>
            <List>
                <AppNavItem label="Home" to="/" exact />
            </List>

            <Divider />

            <List subheader={withHeader('Games')}>
                <AppNavItem label="Create" to="/games/new" exact />
                <AppNavItem label="List" to="/games" exact />
            </List>

            <Divider />
        </nav>
    );
}
