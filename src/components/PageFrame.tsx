import { css } from '@emotion/react';
import { Container, Paper, Theme } from '@material-ui/core';

const styles = {
    root: (theme: Theme) => css`
        padding-top: 2rem;
        padding-bottom: 2rem;
        ${theme.breakpoints.up('lg')} {
            padding-left: 2rem;
            padding-right: 2rem;
            max-width: none;
        }
    `,
    paper: css`
        padding: 1rem;
    `,
};

interface Props {
    children: React.ReactNode;
    withPaper?: boolean;
}

export default function PageFrame({ children, withPaper }: Props) {
    if (withPaper) {
        return (
            <Container css={styles.root} maxWidth={false}>
                <Paper css={styles.paper}>{children}</Paper>
            </Container>
        );
    }
    return <Container css={styles.root}>{children}</Container>;
}
