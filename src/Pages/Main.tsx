import React from 'react'
import { useMediaQuery, useTheme } from "@mui/material"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './Page.css'

const Main: React.FC  = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div className="App-page">
            <div className={matches ? 'main-mobile-div' : 'main-div'}>
                <p className='main-text'>
                    <KeyboardArrowRightIcon />
                    Hello,
                    <br />
                    welcome to my YUNIverse.
                </p>
            </div>
        </div>
    )
}

export default Main