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

            <List subheader={withHeader('Category')}>
                <AppNavItem label="Some Page" to="/some-page" />
            </List>

            <Divider />
        </nav>
    );
}
