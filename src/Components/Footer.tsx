import './FooterStyles.css'

const Footer = () => {
  return (
    <footer className='footer-div'>
      <section className='footer-left-section'>
        00 | 01 | 02
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