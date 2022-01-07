
import { useTranslation } from 'react-i18next'
import Lang from './Lang'
import { Col, Figure, Nav, Navbar, } from 'react-bootstrap'
import logoPrincipal from '../../assets/images/logoPrincipal.png'
import { Fragment, } from 'react'
import logoGitHub from '../../assets/images/github.svg'
import { useNavigate, useLocation, Link } from 'react-router-dom'





const Header = (props) => {

  const location = useLocation()

  const history = useNavigate();

  const handleClick = () => {
    history("/");
  }

  const customStyle = {
    marginLeft: "10px",
    textDecoration: "none"
  }


  const customLink = (origin) => {
    let className = props.scrolled ? 'text-dark' : 'text-white'

    if (origin == location.pathname) {
      className = "text-secondary"
    }

    return className;
  }


  const customNav = () => props.scrolled ? 'bg-white py-0 ' : 'bg-transparent background py-0 '

  const { t } = useTranslation()



  return (
    <Fragment>

      <Navbar sticky='top' className={customNav()}>
        <Col sm={1}>
          <Nav>
            <Link to="" onClick={handleClick}>
              <Figure.Image className='logoNavbar' src={logoPrincipal} alt='Image logo Principal of Gaelo' />
            </Link>
          </Nav>
        </Col>

        <Col>
          <Nav className={'justify-content-center fw-bold '}>
            <Link to="ourviews" style={customStyle} className={customLink("/ourviews")} onClick={handleClick} >{t('navbar.1')}</Link>
            <Link to="solution" style={customStyle} className={customLink("/solution")} onClick={handleClick}>{t('navbar.2')} </Link>
            <Link to="service" style={customStyle} className={customLink("/service")} onClick={handleClick}>{t('navbar.3')} </Link>
            <Link to="expertise" style={customStyle} className={customLink("/expertise")} onClick={handleClick}>{t('navbar.4')} </Link>
            <Link to="team" style={customStyle} className={customLink("/team")} onClick={handleClick}>{t('navbar.5')} </Link>
            <Link to="contact" style={customStyle} className={customLink("/contact")} onClick={handleClick}>{t('navbar.6')} </Link>
          </Nav>
        </Col>
        <a href="https://github.com/Pixilib/"><img className='' src={logoGitHub} /></a>
        <Col sm={1}>
          <Lang />
        </Col>
      </Navbar>
    </Fragment >
  )
}


export default Header


