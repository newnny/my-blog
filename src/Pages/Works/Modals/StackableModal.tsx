
import React, {useState} from 'react';
import { Dialog, IconButton } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

interface StackableModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const StackableModal: React.FC<StackableModalProps>  = ({
    isOpen,
    onClose
}) => {
    const [modalList, setModalList] = useState({
        modalA: true,
        modalB: false,
      })

    return(
        <div>
        {isOpen &&
            <Dialog
                open={isOpen}
            >
                <div>s
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <div>
                    upon list
                </div>
            </Dialog>
        }
        </div>
    )

}

export default StackableModal