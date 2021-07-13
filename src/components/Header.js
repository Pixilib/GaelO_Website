import {Row, Figure} from "../../node_modules/react-bootstrap";
import useWindowDimensions from "../Fonctions/getDimension.js";
import Background from '../assets/images/background.png';
import logoPrincipal from '../assets/images/logoPrincipal.png';
import '../assets/css/header.css';


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
        filter: "blur(4px) contrast(80%)"
    }

}

function Header(props) {

    const styleImage = {
        height: "15%",
        position: "absolute",
        top: "1%",
        left: "2%",
        transform: "translateX(-2%)",
      
    }

  
    return (
        <Row className="bg-light">
            
            <div style={getStyleRow(useWindowDimensions().height, useWindowDimensions().width)}></div>
            <div id="header" className="text-center align-items-center">
                <Figure className="p-2">
                    <Figure.Image src={logoPrincipal} style={styleImage} alt="Image logo Principal of Gaelo" fluid/>
                    <h2 className="styleTexte" >Imaging platform for clinical trials </h2>
                </Figure>
                
            </div>
            
        </Row>
    );
  }
  
  export default Header;