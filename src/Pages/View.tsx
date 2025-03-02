import React, { useEffect, useState } from 'react'
import About from './About'
import Projects from './Projects'

const View = () => {
  const [selected, setSelected] = useState<string>('about')

  const handleSelectMenu = (selected: string) => {
    if (selected === 'about') {
      setSelected('about')
    } else if (selected === 'projects') {
      setSelected('projects')
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);


  const defaultText = "text-[50px] text-[#717171] cursor-pointer"
  const selectedText = "text-[50px] cursor-pointer underline"

  return (
    <section className="flex flex-col m-5 gap-y-3 h-[75dvh] sm:flex-row sm:m-10 sm:gap-x-40 sm:h-[80dvh]">
      <section className='flex flex-col sm:w-[40%] sm:gap-y-10'>
        <article className='flex sm:justify-end'>
          <p
            className={selected === 'about' ? selectedText : defaultText}
            style={{ textDecorationLine: 'none' }}
          >
            01
          </p>&nbsp;&nbsp;
          <p
            className={selected === 'about' ? selectedText : defaultText}
            onClick={() => handleSelectMenu('about')}
          >
            About
          </p>
        </article>
        <article className='flex sm:justify-end'>
          <p
            className={selected === 'projects' ? selectedText : defaultText}
            style={{ textDecorationLine: 'none' }}
          >
            02
          </p>&nbsp;&nbsp;
          <p
            className={selected === 'projects' ? selectedText : defaultText}
            onClick={() => handleSelectMenu('projects')}
          >
            Projects
          </p>
        </article>
      </section>
      <section className='sm:w-[60%]'>
        {selected === 'about' && <About />}
        {selected === 'projects' && <Projects />}
      </section>
    </section>
  )
}

export default View