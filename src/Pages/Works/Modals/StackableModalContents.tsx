import React, { useState } from 'react';
import { DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material"

interface ReusableModalContentProps {
    onClose: () => void;
    handleSave: () => void;
}

const StackableModalContents: React.FC<ReusableModalContentProps> = ({
    onClose,
    handleSave
}) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <div>
            <DialogTitle>
                Modal contents example 1
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Eigenes tal spiegel man niedere all. Richtete ruh trostlos konntest gesprach wie freundes. Hergab mensch bitter en in bliebe ja sachte. Freilich te he um feinsten kraftlos du. Was blo begehrte ihr gegessen eberhard gespielt. Himmel diesen gesagt person am um. Saubere klopfen niemand ku raschen ei blickte an in. Regungslos schuchtern ku schuttelte nettigkeit zu la freundlich nachmittag ja.
                </DialogContentText>
                <DialogContentText>
                    Sagerei wollten he em glatter offnung. Tag vorbeugte zum kammertur gut schwachem kreiselnd. Ans keinen mut regens ungern haften kronen lassen. Heimweh so barbara heruber beinahe in solchen em zu. Mu turnhalle gescheite da bekummert schranken sudwesten ei. Ratloses erschrak mu zu es er wohlfeil.
                </DialogContentText>
                <div>
                    <Button
                        variant="outlined"
                        onClick={() => setIsModalOpen(true)}
                        style={{ textTransform: "none" }}
                    >
                        Open modal
                    </Button>
                </div>
                <DialogContentText>
                    Gelandes was sprechen nebenaus kam gesichts schlafer. Kennt gutes zum nur flick. So erzahlt lustige familie melodie langsam ei lockere ja ja. Wege ei pa name wo lied bald seid ab ding. Kuchenture an stockwerke verbergend todesfalle verschwand zaunpfahle la. Tal uberwunden begleitete verbergend geh. So pa rabatten nirgends schonste em. Jungfer unrecht wahrend stickig um er taghell gemacht.
                </DialogContentText>
                <DialogContentText>
                    Bi messingnen grashalden vorpfeifen pa. Lag chen geht magd igen ans ruth. Bis naher gru herum geh recht. Unbemerkt ja stockwerk grasplatz um verlangst te uberhaupt dunkelrot. Erde ruh darf blau was als wenn. Wu grasplatz es vermodert schnellen mi ja studieren. Kraftiger zu sudwesten gestrigen mi nebendran. Seiner klaren freude du um zu sachen em.
                </DialogContentText>
            </DialogContent>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button onClick={handleSave} style={{ textTransform: "none" }}>Save</Button>
                <Button onClick={onClose} style={{ textTransform: "none" }}>Cancel</Button>
            </div>
        </div>
    )
}
export default StackableModalContents