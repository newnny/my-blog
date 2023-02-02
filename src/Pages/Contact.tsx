import React from 'react'
import './Page.css'
import { useMediaQuery, useTheme } from "@mui/material"

const Contact: React.FC  = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div className={matches ? 'main-mobile-div' : 'main-div'}>
            <div className="background">
                <p><b>Email</b></p>
                <p>
                    Any inquires, please email <a className="a-no-deco" href="mailto:hello@younhee.me">'here'</a>. <br />
                    I will reach you as soon as possible.
                </p>
                <p><b>Linkedin</b></p>
                <p>
                    <a className="a-no-deco" href="https://www.linkedin.com/in/newnny/">linkedin.com/in/newnny</a> <br />
                </p>
                <p><b>Github</b></p>
                <p>
                    <a className="a-no-deco" href="https://github.com/newnny">github.com/newnny</a> <br />
                </p>
            </div>
        </div>
    )
}

export default Contact