import React from 'react'
import './Page.css'
import { useMediaQuery, useTheme } from "@mui/material"
import Face3Icon from '@mui/icons-material/Face3';

const About: React.FC  = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div className="App-page">
            <div className={matches ? 'main-mobile-div' : 'main-div'}>
                <div className="background">
                    <p>My name is <b className="highlight">Yuni</b>.</p>
                    <br />
                    <br />
                    <p>
                        I am working as a&nbsp;
                        <b className="highlight">laed frontend developer</b>
                        &nbsp;and a&nbsp;
                        <b className="highlight">product designer</b>
                        &nbsp;in a&nbsp;
                        <b className="highlight">health tech start-up</b>
                        &nbsp;called <a className="a" href="https://www.rampmedical.com/" target="_blank">'Ramp medical'</a> based in&nbsp;
                        <b className="highlight">Berlin</b>
                        &nbsp;since 2020&nbsp;<br />
                        I studied&nbsp;
                        <b className="highlight">nursing</b>
                        &nbsp;in South Korea and worked as a nurse/HCA for 7years in Busan and London. 
                        Then I have retrained my career skills to become a developer.<br />
                        With my background,I am&nbsp;
                        <b className="highlight">planning</b>,&nbsp;
                        <b className="highlight">designing</b> and&nbsp;
                        <b className="highlight">developing</b>
                        &nbsp;an&nbsp;
                        <b className="highlight">EMR(Electronic Medical Record) system</b>
                        &nbsp;and&nbsp;
                        <b className="highlight">CDS(Clinical Decision Support) tools</b>
                        &nbsp;for health professionals.
                    </p>
                    <br />
                    <br />
                    <p>
                        Personally, I am keen on reading, writing, jazz/classical musics, miniaml architectures/designs, stationeries and kendo.<br />
                        You can also find me here, <a className="a" href="https://blog.naver.com/type_rh" target="_blank">'my korean blog'</a>.<br />
                        I am writing random topics from a view of an insider and an outside of the world. <br />
                        Unfortunately, all articles are written in Korean.
                    </p>
                </div>
            </div>

        </div >
    )
}

export default About