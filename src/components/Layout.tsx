import { css } from '@emotion/react';
import { ReactNode } from 'react';
import AppFrame from './AppFrame';

const styles = {
    root: css`
        display: flex;
    `,
    content: css`
        flex-grow: 1;
        height: 100vh;
        overflow-y: scroll;
    `,
    appBarSpacer: css`
        min-height: 4rem;
    `,
};

interface Props {
    children: ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <div css={styles.root}>
            <AppFrame />
            <main css={styles.content}>
                <div css={styles.appBarSpacer} />
                {children}
            </main>
        </div>
    );
}
