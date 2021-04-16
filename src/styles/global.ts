import { css } from '@emotion/react';
import { Theme } from '@material-ui/core';

let developmentStyle = css``;
if (process.env.NODE_ENV === 'development') {
    developmentStyle = css`
        #react-refresh-overlay {
            top: auto !important;
            bottom: 0 !important;
            height: 30vh !important;
            opacity: 0.9;
        }
    `;
}

export default function globalStyles() {
    return (theme: Theme) => css`
        @font-face {
            font-family: 'Roboto';
            src: url('/assets/fonts/Roboto-Regular.woff2') format('woff2'),
                url('/assets/fonts/Roboto-Regular.woff') format('woff');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }

        @font-face {
            font-family: 'Roboto';
            src: url('/assets/fonts/Roboto-Bold.woff2') format('woff2'),
                url('/assets/fonts/Roboto-Bold.woff') format('woff');
            font-weight: bold;
            font-style: normal;
            font-display: swap;
        }

        ${developmentStyle}

        html, body {
            // page scroll is handled in app layout
            overflow-y: hidden;
        }
        a {
            &:not([class*='Mui']) {
                color: ${theme.palette.primary.main};
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    `;
}
