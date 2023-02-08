import React, { useState } from 'react';
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"

const ReusableModalContent = ({
}) => {
    return (
        <div>
            <DialogTitle>
                title
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    contents
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button>save</Button>
                <Button autoFocus>
                    Close
                </Button>
            </DialogActions>
        </div>
    )
}
export default ReusableModalContent