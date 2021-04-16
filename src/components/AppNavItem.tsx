import { css } from '@emotion/react';
import { ListItem, ListItemText, Theme } from '@material-ui/core';
import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

const styles = {
    root: (theme: Theme) => css`
        ${theme.breakpoints.up('sm')} {
            padding-left: 1.5rem;
        }
        &:hover {
            background: rgba(0, 0, 0, 0.1);
        }
        &.active {
            background: rgba(0, 0, 0, 0.4);
            &,
            .MuiSvgIcon-root {
                transition: color 0.15s;
                color: ${theme.palette.primary.light};
            }
        }
    `,
};

interface AppNavItemProps extends Partial<NavLinkProps> {
    label: string;
    to: string;
}

export default function AppNavItem({ label, to, ...navLinkProps }: AppNavItemProps) {
    return (
        <ListItem button css={styles.root} component={NavLink} to={to} {...navLinkProps}>
            {/* <ListItemIcon>icon</ListItemIcon> */}
            <ListItemText>{label}</ListItemText>
        </ListItem>
    );
}
