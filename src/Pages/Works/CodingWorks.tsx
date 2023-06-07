import React from "react"
import { useLocation, useNavigate } from "react-router-dom";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import minifluxbinder from '../../Images/minifluxbinder.png'

const CodingWorks: React.FC = () => {
    const location = useLocation();
    const linkId = location.pathname
    const navigate = useNavigate()

    return (
        <div>
            <p onClick={() => navigate(-1)} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                <ArrowCircleLeftIcon />&nbsp;Back to list
            </p>
            {linkId === "/work/coding/work_1" &&
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img style={{ width: "50%" }} src={minifluxbinder} alt="minifluxbinder" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <p>
                            It designed to bind e-pub files using the Miniflux API.<br />
                            I've simplified the process of consuming feeds on your e-book reader, providing unparalleled convenience and ease-of-use.<br />
                            Discover a better way to enjoy your favorite RSS feeds with miniflux binder application<br />
                            Please check&nbsp;
                            <a className="a" href="https://minifluxbinder.vercel.app/" target="_blank" rel="noreferrer">
                                here
                            </a>!

                        </p>
                    </div>
                </div>
            }

        </div>
    )
}

export default CodingWorks