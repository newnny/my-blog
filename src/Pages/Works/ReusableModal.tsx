import React, { useState } from 'react';
import {
    Button, Dialog,
} from "@mui/material"
import ReusableModalContent from './ReusableModalContent';

const ReusableModal: React.FC = ({
}) => {
    const [open, setOpen] = useState<boolean>(false)
    const [close, setClose] = useState<boolean>(false)
    const [stack, setStack] = useState([])


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <p>
                Example of simple reusable modal with Mui dialog
            </p>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open dialog
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
            </Dialog>
        </div>
    )

}

export default ReusableModal