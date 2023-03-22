import React from 'react';
import { Dialog, IconButton } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

interface ReusableModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const ReusableModal: React.FC<ReusableModalProps> = ({
    children,
    isOpen,
    onClose
}) => {

    return (
        <div>
            {isOpen &&
                <Dialog
                    open={isOpen}
                >
                    <div>
                        <IconButton onClick={onClose}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <div>
                        {children}
                    </div>
                </Dialog>
            }
        </div>
    )

}

export default ReusableModal