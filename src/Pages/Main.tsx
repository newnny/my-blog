import React from 'react'
import { useMediaQuery, useTheme } from "@mui/material"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './Page.css'
import mainImage from '../Images/YUNI_Z.png'

const Main: React.FC = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div className="App-page">
            <div className={matches ? 'main-mobile-div' : 'main-div'}>
            <img src={mainImage} alt="MainImage" style={{maxWidth: 500}} />
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