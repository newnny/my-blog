import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import './FooterStyles.css'

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
  
  return (
    <footer className='flex flex-col sm:flex-row m-10 text-gray-400 w-full sticky bottom-0'>
      <section className='footer-left-section'>
        <dl className='page-container'>
          <p
            onClick={() => handleSelectedPage('main')}
            className={selectedPage === 'main' || location.pathname === '/' ? 'selected-p' : 'unselected-p'}
          >
            01
          </p>
          <p>|</p>
          <p
            onClick={() => handleSelectedPage('view')}
            className={selectedPage === 'view' || location.pathname === '/view' ? 'selected-p' : 'unselected-p'}
          >
            02
          </p>
        </dl>
      </section>
      <section className='footer-right-section'>
        <a className="a" style={{ color: "grey" }} href="mailto:newnny0812@gmail.com" target="_blank" rel="noreferrer">
          Email
        </a>&nbsp;
        |&nbsp;
        <a className="a" style={{ color: "grey" }} href="https://www.linkedin.com/in/newnny/" target="_blank" rel="noreferrer">
          Linkedin
        </a>&nbsp;
        |&nbsp;
        <a className="a" style={{ color: "grey" }} href="https://github.com/newnny" target="_blank" rel="noreferrer">
          Github
        </a>
      </section>
    </footer>
  )
}

export default Footer