import {Row, Figure} from "../../node_modules/react-bootstrap";
import useWindowDimensions from "../Fonctions/getDimension.js";
import Background from '../assets/images/background.png';
import '../assets/css/header.css';
import { useTranslation } from "react-i18next";
import logoPrincipal from '../assets/images/gaelo-logo.svg';

import Navbar from './Navbar.js';


function getStyleRow(h, w) {
    
   
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



    return (
        <Row id="header" className="bg-light">
            <div style={getStyleRow(useWindowDimensions().height, useWindowDimensions().width)}></div>
            <div className="text-center align-items-center">
                
                <Navbar /> 
                <h2 className="styleTexte bg-light p-5">{t('header.title')}</h2>
                <Figure.Image id="imageLogo" src={logoPrincipal} className="styleImage" alt="Image logo Principal of Gaelo"/>
            </div>
            
        </Row>
    );
  }
  
  export default Header;