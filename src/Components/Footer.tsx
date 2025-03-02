import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'

const Footer = () => {
  const [selectedPage, setSelectedPage] = useState<string>('main')
  const navigate = useNavigate();
  const location = useLocation()

  const handleSelectedPage = (page: string) => {
    if (page === 'main') {
      setSelectedPage('main')
      navigate('/')
    } else {
      setSelectedPage('view')
      navigate('/view')
    }
  }

  useEffect(() => {
    location.pathname === "/" ? setSelectedPage('main') : setSelectedPage('/view')
  }, [location.pathname])

  const defaultText = "cursor-pointer"
  const selectedText = "cursor-pointer text-[#e85847] font-semibold"

  return (
    <footer className='flex flex-col mt-10 gap-y-2 text-gray-400 w-full sm:flex-row'>
      <section className='flex justify-center sm:w-[40%]'>
        <dl className='flex flex-row space-x-2'>
          <p
            onClick={() => handleSelectedPage('main')}
            className={selectedPage === 'main' || location.pathname === '/' ? selectedText : defaultText}
          >
            01
          </p>
          <p>|</p>
          <p
            onClick={() => handleSelectedPage('view')}
            className={selectedPage === 'view' || location.pathname === '/view' ? selectedText : defaultText}
          >
            02
          </p>
        </dl>
      </section>
      <section className='flex justify-center sm:w-[60%]'>
        <a className="underline text-gray-400" href="mailto:newnny0812@gmail.com" target="_blank" rel="noreferrer">
          Email
        </a>&nbsp;
        |&nbsp;
        <a className="underline text-gray-400" href="https://www.linkedin.com/in/newnny/" target="_blank" rel="noreferrer">
          Linkedin
        </a>&nbsp;
        |&nbsp;
        <a className="underline text-gray-400" href="https://github.com/newnny" target="_blank" rel="noreferrer">
          Github
        </a>
      </section>
    </footer>
  )
}

export default Footer
