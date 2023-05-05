import React from 'react'
import './Page.css'
import { useMediaQuery, useTheme } from "@mui/material"
import LaunchIcon from '@mui/icons-material/Launch'
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Contact: React.FC = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div className={matches ? 'main-mobile-div' : 'main-div'}>
            <div className="background">
                <p>
                    <b>Email</b>
                    <br />
                    Any inquires, please email 
                    <a className="a-no-deco" href="mailto:newnny0812@gmail.com" target="_blank" rel="noreferrer">'here'&nbsp;<MailOutlineIcon/></a>
                    <br />
                    I will reach you as soon as possible.
                </p>
                <p>
                    <b>Linkedin</b>
                    <br />
                    <a className="a-no-deco" href="https://www.linkedin.com/in/newnny/" target="_blank" rel="noreferrer">linkedin.com/in/newnny&nbsp;<LaunchIcon /></a>
                    <br />
                </p>
                <p>
                    <b>Github</b>
                    <br />
                    <a className="a-no-deco" href="https://github.com/newnny" target="_blank" rel="noreferrer">github.com/newnny&nbsp;<LaunchIcon /></a>
                    <br />
                </p>
            </div>
        </div>
    )
}

export default Contact