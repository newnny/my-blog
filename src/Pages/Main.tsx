import React, { useState, useRef, useEffect } from 'react'
import { useMediaQuery, useTheme } from "@mui/material"
import TypeWriter from '../Components/TypeWriter'
import Works from './Works'
import StraightIcon from '@mui/icons-material/Straight';
import './Page.css'


const Main: React.FC = () => {
    const [showMore, setShowMore] = useState(false)
    const defaultRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);

    const scrollToDefault = () => {
        defaultRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    const scrollToProject = () => {
        projectRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div className="App-page" >
            <div className='view-hight' ref={defaultRef}>
                <div className={matches ? 'main-mobile-div' : 'main-div'}>
                    {matches ?
                        <div>
                            <h3 style={{ color: "#333", fontWeight: 500 }}>
                                <TypeWriter text={"Hi."} delay={40} />
                            </h3>
                            <h3 style={{ color: "#333", fontWeight: 500 }}>
                                <TypeWriter text={"My name is Younhee(YUNI) Park and I am a JavaScript frontend developer."} delay={40} />
                                <br />
                                <a className="a" style={{ fontSize: 16, fontWeight: 500, color: "grey" }} onClick={() => setShowMore(!showMore)}>
                                    {!showMore ? "more" : "less"}
                                </a>
                            </h3>
                        </div>
                        : <div>
                            <h1 style={{ color: "#333", fontWeight: 500 }}>
                                <TypeWriter text={"Hi."} delay={40} />
                            </h1>
                            <h1 style={{ color: "#333", fontWeight: 500 }}>
                                <TypeWriter text={"My name is Younhee(YUNI) Park and I am a JavaScript frontend developer."} delay={40} />
                                <br />
                                <a className="a" style={{ fontSize: 16, color: "grey" }} onClick={() => setShowMore(!showMore)}>
                                    {!showMore ? "more" : "less"}
                                </a>
                            </h1>
                        </div>
                    }
                    <div>
                        {showMore &&
                            <div>
                                <p style={{ fontSize: matches ? 14 : 16, color: "#555" }}>
                                    Before transitioning into the tech industry, I studied nursing and worked as a nurse in South Korea and UK for 6 years. 
                                    <br /><br />
                                    As a frontend developer, I worked with a health tech start-up, <a className="a" style={{ fontWeight: 500 }} href="https://www.rampmedical.com/" target="_blank" rel="noreferrer">Ramp medical</a> based in Berlin, for 3 years. <br />
                                    Personally, I aim to write clean code and I am keen on working with data visualasiation.
                                    <br /><br />
                                    And I enjoy writing, baking, Kendo and maintaining my <a className="a" style={{ fontWeight: 500 }} href="https://blog.naver.com/type_rh" target="_blank" rel="noreferrer">blog</a>
                                </p>
                                <StraightIcon onClick={scrollToProject} style={{ color: "grey", cursor: "pointer", transform: "rotate(180deg)", marginLeft: -8 }} />

                            </div>
                        }
                    </div>

                </div>
            </div>
            <div className='view-hight' id="introduction" ref={projectRef} style={{ marginLeft: matches ? -20 : "inherit" }}>
                <Works />
                <StraightIcon onClick={scrollToDefault} style={{ color: "grey", cursor: "pointer", marginTop: 15, marginBottom: 20 }} />
            </div>
        </div>
    )
}

export default Main