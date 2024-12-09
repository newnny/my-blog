import React, { useEffect, useContext } from 'react'
import './MainStyles.css'
import { ThemeContext } from '../App'
import { useNavigate } from 'react-router-dom'



const Main: React.FC = () => {
    const theme = useContext(ThemeContext)
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="flex flex-col items-center h-dvh sm:flex-row" id={theme!}>
            <section className='flex w-[40%] h-[50%] sm:m-30 justify-end'>
                <section className='flex w-[50%]'>
                    <hr className='vertical-line' />
                    <article className='flex flex-col justify-center text-xl'>
                        <p>Y</p>
                        <p>U</p>
                        <p>N</p>
                        <p>I</p>
                        <p className='mt-2 mb-2'/>
                        <p>P</p>
                        <p>A</p>
                        <p>R</p>
                        <p>K</p>
                    </article>
                    <hr className='vertical-line mt-[200%] sm:mt-[55%] ' />
                </section>
            </section>
            <section className='flex flex-col w-[60%] h-[50%] m-10'>
                <p className='text-[50px]'>Welcome.</p>
                <p className='text-[24px]'>
                    My name is Yuni.
                    <br />
                    I am a frontend engineer and
                    <br />
                    UI designer.
                </p>
                <a className='mt-3' onClick={() => navigate('/view')}>Learn more</a>
            </section>
        </main>
    )
}

export default Main