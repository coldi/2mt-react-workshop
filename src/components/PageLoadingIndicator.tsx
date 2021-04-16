import { css, keyframes } from '@emotion/react';
import { Box } from '@material-ui/core';
import { Loop as LoadingIcon } from '@material-ui/icons';
import PageFrame from './PageFrame';

const rotation = keyframes`
    from { transform: rotate(0) }
    to { transform: rotate(-360deg) }
`;

const styles = {
    icon: css`
        animation: ${rotation} 1s ease infinite;
    `,
    label: css`
        opacity: 0.5;
    `,
    /*
    placeholder: css`
        min-height: 4rem;
    `,
    */
};

export default function PageLoadingIndicator() {
    return (
        <PageFrame>
            <Box mb={4}>
                <LoadingIcon css={styles.icon} />
            </Box>
        </PageFrame>
    );
}
