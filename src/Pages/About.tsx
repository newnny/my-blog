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
                        and I am a <b className="highlight">lead frontend developer</b>&nbsp;
                        and <b className="highlight">product designer</b>&nbsp;
                        at <a className="a" href="https://www.rampmedical.com/" target="_blank" rel="noreferrer">Ramp medical</a>,
                        a <b className="highlight">health tech start-up</b>&nbsp;
                        based in <b className="highlight">Berlin</b>.
                        I've been with the company since 2020,
                        and I've been working tirelessly to develop an <b className="highlight">Electronic Medical Record (EMR) system</b>, <b className="highlight">Patient dashboards</b> and <b className="highlight">Clinical Decision Support (CDS) tools</b> for health professionals.
                    </p>
                    <p>
                        Before transitioning into the tech industry, I studied <b className="highlight">nursing</b> in South Korea and worked as a nurse/HCA for six years in Busan and London.
                        <br />
                        My unique background and skill set have been incredibly valuable in my current role, where I get to combine my knowledge of healthcare with my passion for technology.
                        <br />
                    </p>
                    <p>
                        In my free time, I enjoy indulging in my hobbies, which include literacy, jazz/classical music, minimal design, kendo, and maintaining my <a className="a" href="https://blog.naver.com/type_rh" target="_blank" rel="noreferrer">blog</a>.
                        <br />
                        Although my blog is written exclusively in Korean, it covers a range of interesting topics from an insider's and outsider's perspective.
                    </p>
                    <p>
                        I look forward to connecting with you further and learning more about your interests and experiences.
                    </p>
                </div>
            </div>
        </div >
    )
}

export default About