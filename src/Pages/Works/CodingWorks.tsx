import { useLocation, useNavigate } from "react-router-dom";
import ReusableModal from "./ReusableModal";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const CodingWorks = ({
}) => {
    const location = useLocation();
    const linkId = location.pathname
    const navigate = useNavigate()

    return (
        <div>
            <p onClick={() => navigate(-1)} style={{display: "flex", alignItems: "center", cursor: "pointer"}}>
                <ArrowCircleLeftIcon />&nbsp;Back to list
            </p>
            {linkId === "/work/coding/reusable_modal" &&
                <ReusableModal />
            }

        </div>
    )
}

export default CodingWorks