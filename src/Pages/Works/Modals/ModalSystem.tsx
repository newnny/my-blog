import React, {useState} from "react"
import { Button } from "@mui/material"
import ReusableModal from "./ReusableModal"
import ReusableModalContent from "./ReusableModalContent"
import StackableModal from "./StackableModal"

const ModalSystem = ()=> {
    const [isSingleModalOpen, setIsSingleModalOpen] = useState<boolean>(false);
    const [isStackableModalOpen, setIsStackableModalOpen] = useState<boolean>(false);


    const handleSave = () => {
        console.log("saved!")
        setIsSingleModalOpen(false)
    }
    
    return(
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
                <Button
                    variant="outlined"
                    onClick={() => setIsSingleModalOpen(true)}
                    style={{ textTransform: "none" }}
                >
                    Single use modal
                </Button>
                <ReusableModal
                    isOpen={isSingleModalOpen}
                    onClose={() => setIsSingleModalOpen(false)}
                >
                    <ReusableModalContent
                        onClose={() => setIsSingleModalOpen(false)}
                        handleSave={handleSave}
                    />
                </ReusableModal>
            </div>

            <div>
                <Button
                    variant="outlined"
                    onClick={() => setIsStackableModalOpen(true)}
                    style={{ textTransform: "none" }}
                >
                    STACKABLE modal
                </Button>
                <StackableModal
                    isOpen={isStackableModalOpen}
                    onClose={() => setIsStackableModalOpen(false)}
                />
            </div>
        </div>
    )
}

export default ModalSystem