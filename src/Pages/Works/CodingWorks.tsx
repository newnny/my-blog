import React from "react"
import { useLocation, useNavigate } from "react-router-dom";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import minifluxbinder from '../../Images/minifluxbinder.png'
import ramp from '../../Images/ramp.png'
import './WorkStyle.css'

const CodingWorks: React.FC = () => {
    const location = useLocation();
    const linkId = location.pathname
    const navigate = useNavigate()

    return (
        <div>
            <p onClick={() => navigate(-1)} className="navigate-link">
                <ArrowCircleLeftIcon />&nbsp;Back to list
            </p>
            {linkId === "/work/coding/work_1" &&
                <div className="flex-column">
                    <div className="flex-center">
                        <img style={{ width: "50%" }} src={ramp} alt="ramp" />
                    </div>
                    <div className="flex-center">
                        <p>
                            I've been fortunate to be part of an innovative healthtech company, RAMP medical, that has been changing the healthcare landscape for 8 years.<br />
                            Our team is dedicated to creating exceptional web and mobile interfaces for an in-house Electronic Medical Record (EMR) system, Clinical Decision System (CDS) and patient dashboards.<br />
                            These cutting-edge tools are trusted by hospitals and private practices across Germany and Argentina.<br />
                            You can check Ramp's product demo video with a below link.<br />
                            <a className="a" href="https://www.rampmedical.com/help" target="_blank" rel="noreferrer">
                                Ramp product demo video
                            </a>
                            <br />
                            <a className="a" href="https://www.rampmedical.com" target="_blank" rel="noreferrer">
                                Ramp medical website
                            </a>
                        </p>
                    </div>
                </div>
            }
            {linkId === "/work/coding/work_2" &&
                <div className="flex-column">
                    <div className="flex-center">
                        <img style={{ width: "50%" }} src={minifluxbinder} alt="minifluxbinder" />
                    </div>
                    <div className="flex-center">
                        <p>
                            It designed to bind e-pub files using the Miniflux API.<br />
                            I've simplified the process of consuming feeds on your e-book reader, providing unparalleled convenience and ease-of-use.<br />
                            Discover a better way to enjoy your favorite RSS feeds with miniflux binder application<br />
                            Please check here:&nbsp;
                            <a className="a" href="https://www.minifluxbinder.com/" target="_blank" rel="noreferrer">
                                www.minifluxbinder.com
                            </a>
                        </p>
                    </div>
                </div>
            }
        </div>
    )
}

export default CodingWorks