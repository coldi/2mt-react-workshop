import { createMuiTheme } from '@material-ui/core';

declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        settings: {
            sidebarWidth: number;
        };
    }
    interface ThemeOptions {
        settings: {
            sidebarWidth: number;
        };
    }
}

declare module '@material-ui/core/styles/createPalette' {
    interface Palette {
        aside: PaletteColor;
    }
    interface PaletteOptions {
        aside: Partial<PaletteColor>;
    }
}

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#5687C9',
            light: '#5687C9',
        },
        aside: {
            light: '#686c77',
            main: '#4d505b',
            dark: '#3c3f48',
            contrastText: '#fff',
        },
        background: {
            default: '#edf0f5',
        },
    },
    settings: {
        sidebarWidth: 250,
    },
    zIndex: {
        drawer: 0,
    },
});

export default theme;
