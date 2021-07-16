import '../assets/css/navbar.css';
import { useTranslation } from "react-i18next";
import { Figure } from "../../node_modules/react-bootstrap";
import logoPrincipal from '../assets/images/gaelo-logo.svg';


function NavigationBar(props) {


    window.addEventListener('scroll', (event) => {
        var elementHeader = document.getElementById("header").offsetHeight * 50/100;
        var image = document.getElementById("imageLogo");
        var navbar = document.getElementById("navbar");
      
        if(window.pageYOffset > elementHeader){
            image.style.height = "50%";
            navbar.style.backgroundColor = "#314053";
            navbar.style.height = "4rem";
            navbar.style.fontSize = "1.2rem";
        }
        if(window.pageYOffset < elementHeader){
            image.style.height = "75%";
            navbar.style.backgroundColor = "";
            navbar.style.height = "auto";
            navbar.style.fontSize = "1.5rem";
           

        }
        var elementGaelo = elementHeader;
        var elementWork = document.getElementById("gaelo").offsetHeight + elementGaelo;
        var elementFeatures = document.getElementById("work").offsetHeight + elementWork;
        var elementVideos = document.getElementById("features").offsetHeight + elementFeatures;
        var elementAbout = document.getElementById("videos").offsetHeight + elementVideos;
        var elementContact = document.getElementById("about").offsetHeight + elementAbout;
        var elementLicense = document.getElementById("contact").offsetHeight + elementContact;
        if(window.pageYOffset < elementHeader){
            var navLink = document.getElementsByClassName('navbar-link');
            for(var i = 0; i < navLink.length; i++){
                navLink[i].classList.remove("navbar-active");
            }
        }
        if(window.pageYOffset > elementGaelo){
            activeItem("navGaelo");
        }
        if(window.pageYOffset > elementWork){
            activeItem("navWork");
        }
        if(window.pageYOffset > elementFeatures){
            activeItem("navFeatures");
        }
        if(window.pageYOffset > elementVideos){
            activeItem("navVideos");
        }
        if(window.pageYOffset > elementAbout){
            activeItem("navAbout");
        }
        if(window.pageYOffset > elementContact){
            activeItem("navContact");
        }
        if(window.pageYOffset > elementLicense){
            activeItem("navLicense");
        }


       

    });

    function activeItem(item){
        var navLink = document.getElementsByClassName('navbar-link');
        for(var i = 0; i < navLink.length; i++){
            navLink[i].classList.remove("navbar-active");
        }
        document.getElementById(item).classList.add("navbar-active");
    }
   
    var mobileMenu = () => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".navbar-menu");
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    var closeMenu = (e) => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".navbar-menu");
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");

        var navLink = document.getElementsByClassName('navbar-link');
        for(var i = 0; i < navLink.length; i++){
            navLink[i].classList.remove("navbar-active");
        }
        e.target.classList.add("navbar-active");
    }
    
    var styleImage = {
        height: "75%",
        position: "absolute",
        display: "flex",
        transform: "translateX(-2%)",
        transition: "1s"
    
    }

    const { t } = useTranslation();

    return (
        <nav id="navbar" className="navbarPerso fixed-top align-items-center justify-content-center">
            
            <Figure.Image id="imageLogo" src={logoPrincipal} style={styleImage} alt="Image logo Principal of Gaelo" fluid/>
            
            <ul className="navbar-menu">
                <li className="navbar-item">
                    <a id="navGaelo" href="#gaelo" className="navbar-link" onClick={closeMenu}>{t('navbar.1')}</a>
                </li>
                <li className="navbar-item">
                    <a id="navWork" href="#work" className="navbar-link" onClick={closeMenu}>{t('navbar.2')}</a>
                </li>
                <li className="navbar-item">
                    <a id="navFeatures" href="#features" className="navbar-link" onClick={closeMenu}>{t('navbar.3')}</a>
                </li>
                <li className="navbar-item">
                    <a id="navVideos" href="#videos" className="navbar-link" onClick={closeMenu}>{t('navbar.4')}</a>
                </li>
                <li className="navbar-item">
                    <a id="navAbout" href="#about" className="navbar-link" onClick={closeMenu}>{t('navbar.5')}</a>
                </li>
                <li className="navbar-item">
                    <a id="navContact" href="#contact" className="navbar-link" onClick={closeMenu}>{t('navbar.6')}</a>
                </li>
                <li className="navbar-item">
                    <a id="navLicense" href="#license" className="navbar-link" onClick={closeMenu}>{t('navbar.7')}</a>
                </li>
            </ul>
            <div className="hamburger" onClick={mobileMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
  }
  
  export default NavigationBar;

