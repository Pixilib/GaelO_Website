import {Row} from "../../node_modules/react-bootstrap";
import useWindowDimensions from "../Fonctions/getDimension.js";
import Background from '../assets/images/background.png';
import '../assets/css/header.css';
import { useTranslation } from "react-i18next";

import Navbar from './Navbar.js';


function getStyleRow(h, w) {
    if(w < 768){
        return{
            backgroundImage: `url(${Background})`,
           
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: h/2 + 'px',
            filter: "blur(3px) contrast(80%)"
        }
    }
   
    return{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: h + 'px',
        width: "100%",
        filter: "blur(1px) contrast(80%)"
    }

}


function Header(props) {

    const { t } = useTranslation();

    var onClickHeader = (e) => {
        
        var elementVideo = document.getElementById('videoPresentation');
        if(e.target !== document.getElementById('boutonVideo')){
            elementVideo.style.left = "-100%";
        }
        if(e.target === document.getElementById('boutonVideo')){
            elementVideo.style.left = "50%";
        }
        
    }

    var onClickButton = () => {
        
        var elementVideo = document.getElementById('videoPresentation');
        elementVideo.style.left = "50%";
           
    }
    
    var styleVideo = {
        position: "absolute",
        left: "-100%",
        top: "15%",
        zIndex: "2",
        transform: "translateX(-50%)",
        height: "80%",
        width: "50%",
        transition: "1.5s", 

    }


    return (
        <Row id="header" className="bg-light" onClick={onClickHeader}>
            
            <div style={getStyleRow(useWindowDimensions().height, useWindowDimensions().width)}></div>
            
            <div className="text-center align-items-center">
                <div className="embed-responsive">
                    <iframe id="videoPresentation" style={styleVideo} className="embed-responsive-item" src={t('header.linkVideo')} title="Video presentation Gaelo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <button id="boutonVideo" className="bouton" onClick={onClickButton}>{t('header.button')}</button>
                <Navbar /> 
                <h2 className="styleTexte bg-light p-5">{t('header.title')}</h2>
            </div>
            
        </Row>
    );
  }
  
  export default Header;