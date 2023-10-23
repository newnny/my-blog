import React, { useState } from 'react'
import { useMediaQuery, useTheme, Button } from "@mui/material"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './Page.css'
import mainImage from '../Images/YUNI_Z.png'
import { fontWeight } from '@mui/system';

const Main: React.FC = () => {
    const [showMore, setShowMore] = useState(false)

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div className="App-page">
            <div className={matches ? 'main-mobile-div' : 'main-div'}>
                <div //style={{ width: !showMore? "70%": "50%", margin: 20 }}
                >
                    <h1 style={{ color: "#333", fontWeight: 500 }}>
                        Hi. </h1>
                    <h1 style={{ color: "#333", fontWeight: 500 }}>
                        My name is Younhee(YUNI) Park and<br/> I am a <b>JavaScript frontend developer</b>.
                        <br />
                        <a className="a" style={{ fontSize: 16, fontWeight: 500, color: "grey" }} onClick={() => setShowMore(!showMore)}>
                            {!showMore? "more" : "less"}
                        </a>
                    </h1>
                </div>
                <div //style={{ width: !showMore?"30%": "50%" }}
                >
                    {showMore &&
                        <p>
                            Before transitioning into the tech industry, I studied nursing and worked as a nurse in South Korea and UK for 6 years. <br />
                            As a frontend developer, I worked with a health tech start-up, <a className="a" style={{fontWeight: 500}} href="https://www.rampmedical.com/" target="_blank" rel="noreferrer">Ramp medical</a> based in Berlin, for 3 years. <br />
                            Personally, I aim to write clean code and I am keen on working with data visualasiation.
                            <br /><br />
                            And I enjoy writing, baking, Kendo and maintaining my <a className="a" style={{fontWeight: 500}} href="https://blog.naver.com/type_rh" target="_blank" rel="noreferrer">blog</a>
                        </p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Main