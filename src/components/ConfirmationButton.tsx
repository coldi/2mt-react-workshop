import Button, { ButtonProps } from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { useState } from 'react';

interface Props extends ButtonProps {
    component?: typeof Button | typeof IconButton;
    dialogTitle: React.ReactNode;
    dialogMessage: React.ReactNode;
    onConfirm: () => void;
    onCancel?: () => void;
}

export default function ConfirmationButton({
    dialogTitle,
    dialogMessage,
    onConfirm,
    onCancel,
    ...buttonProps
}: Props) {
    const [open, setOpen] = useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleConfirm() {
        setOpen(false);
        onConfirm();
    }
    function handleCancel() {
        setOpen(false);
        onCancel?.(); // eslint-disable-line no-unused-expressions
    }

    return (
        <>
            <Button {...buttonProps} onClick={handleClickOpen} />
            <Dialog
                open={open}
                onClose={handleCancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {dialogMessage}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel}>Cancel</Button>
                    <Button onClick={handleConfirm} color="primary" autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
