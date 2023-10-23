import React from 'react'
import './Page.css'
import { useMediaQuery, useTheme } from "@mui/material"

const About: React.FC = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div className="App-page">
            <div className={matches ? 'main-mobile-div' : 'main-div'}>
                <div className="background">
                    <p>
                        Hello there,
                    </p>
                    <p>
                        My name is <b className="highlight">Yuni</b>,
                        and I am a <b className="highlight">frontend developer.</b>&nbsp;<br />
                        Before transitioning into the tech industry, I studied nursing and worked as a <b className="highlight">nurse</b>&nbsp;for 6 years.<br />
                        I worked with a health tech start-up, <a className="a" href="https://www.rampmedical.com/" target="_blank" rel="noreferrer">Ramp medical</a> based in Berlin, for 3 years.
                    </p>
                    <p>
                        In my free time, I enjoy indulging in my hobbies, which include literacy, jazz/classical music,  kendo, and maintaining my <a className="a" href="https://blog.naver.com/type_rh" target="_blank" rel="noreferrer">blog</a>
                    </p>
                </div>
            </div>
        </div >
    )
}

export default About