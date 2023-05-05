import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

import ModalSystem from "./Modals/ModalSystem";

const CodingWorks: React.FC = () => {
    const location = useLocation();
    const linkId = location.pathname
    const navigate = useNavigate()

    return (
        <div>
            <p onClick={() => navigate(-1)} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                <ArrowCircleLeftIcon />&nbsp;Back to list
            </p>
            {linkId === "/work/coding/modal_system" && <ModalSystem />}
            {linkId === "/work/coding/work_1" && <p>Coming soon</p>}
            {linkId === "/work/coding/work_2" && <p>Coming soon</p>}

        </div>
    )
}

export default CodingWorks