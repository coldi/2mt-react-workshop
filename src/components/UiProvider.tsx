import { Snackbar, SnackbarCloseReason } from '@material-ui/core';
import { Alert, AlertProps } from '@material-ui/lab';
import { createContext, SyntheticEvent, useContext, useMemo, useState } from 'react';

interface UiAlert {
    message: string;
    severity?: AlertProps['severity'];
}

interface UiContextValue {
    setAlert: (alert: UiAlert) => void;
}

const UiContext = createContext<UiContextValue>(null);

export function useUi() {
    return useContext(UiContext);
}

interface Props {
    children: React.ReactNode;
}

export default function UiProvider({ children }: Props) {
    const [alert, setAlert] = useState<UiAlert>(null);

    const contextValue = useMemo<UiContextValue>(() => ({ setAlert }), []);

    function handleAlertClose(event: SyntheticEvent, reason?: SnackbarCloseReason) {
        if (reason === 'clickaway') return;
        setAlert(null);
    }

    return (
        <>
            <UiContext.Provider value={contextValue}>{children}</UiContext.Provider>
            {alert && (
                <Snackbar
                    key={alert.message}
                    open
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    autoHideDuration={5000}
                    onClose={handleAlertClose}
                >
                    <Alert variant="filled" elevation={6} severity={alert.severity}>
                        {alert.message}
                    </Alert>
                </Snackbar>
            )}
        </>
    );
}
