import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

import ModalSystem from "./Modals/ModalSystem";

const CodingWorks = ({
}) => {
    const location = useLocation();
    const linkId = location.pathname
    const navigate = useNavigate()

    return (
        <div>
            <p onClick={() => navigate(-1)} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                <ArrowCircleLeftIcon />&nbsp;Back to list
            </p>
            {linkId === "/work/coding/modal_system" && <ModalSystem />}

        </div>
    )
}

export default CodingWorks