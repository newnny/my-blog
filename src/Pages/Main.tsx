import React, { useState, useRef, useEffect, useContext } from 'react'
import { useMediaQuery, useTheme } from "@mui/material"
import './MainStyles.css'
import { ThemeContext } from '../App'


const Main: React.FC = () => {
    const [showMore, setShowMore] = useState(false)
    const defaultRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);
    const theme = useContext(ThemeContext)

    const scrollToDefault = () => {
        defaultRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    const scrollToProject = () => {
        projectRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className='main' id={theme!}>
            <section className='main-left-section'>
                <section className='left-section-inner-section' />
                <section className='left-section-inner-section'>
                    <hr className='vertical-line' />
                    <article className='name-field'>
                        <p className='name'>Y</p>
                        <p className='name'>U</p>
                        <p className='name'>N</p>
                        <p className='name'>I</p>
                        <p />
                        <p className='name'>P</p>
                        <p className='name'>A</p>
                        <p className='name'>R</p>
                        <p className='name'>K</p>
                    </article>
                    <hr className='vertical-line' />
                </section>
            </section>
            <section className='main-right-section'>
                <p className='main-h1'>Welcome.</p>
                <p className='main-p1'>
                    My name is Yuni.
                    <br />
                    I am a frontend engineer and
                    <br />
                    UI designer
                </p>
                <p>See more</p>
            </section>
        </main>
    )
}

export default Main