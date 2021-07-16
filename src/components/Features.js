import {Row, Col, Carousel} from "../../node_modules/react-bootstrap";
import { useTranslation } from "react-i18next";
import '../assets/css/features.css';

import slide1 from '../assets/images/dicomimport.png';
import slide2 from '../assets/images/patientpanel.png';
import slide3 from '../assets/images/admin-1.png';
import slide4 from '../assets/images/visitinterface2.png';
import slide5 from '../assets/images/authentication-1.png';
import slide6 from '../assets/images/gaelo_stat.png';
import slide7 from '../assets/images/gaelo_stat2.png';
import slide8 from '../assets/images/investigator-1.png';
import slide9 from '../assets/images/main-1.png';

function getStyleFeatures(){
    return {
        color: "#353275"
    }
}
function Features(props) {

    const { t } = useTranslation();


    return (
        <Row id="features" className="bg-light p-5 text-center align-items-center border-top" style={getStyleFeatures()}>
            <Col md={6}>
                <h3>{t('features.title')}</h3>
                <p className="text-start">
                    {t('features.body.0')}<br />
                    {t('features.body.1')}<br />
                    {t('features.body.2')}<br />
                    {t('features.body.3')}<br />
                    {t('features.body.4')}<br />
                    {t('features.body.5')}<br />
                    {t('features.body.6')}<br />
                    {t('features.body.7')}<br />
                    {t('features.body.8')}
                </p>
            </Col>
            <Col md={6} className="styleCarouselImage text-center align-items-center">
                <Carousel className="p-5" variant="dark" interval={null}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={slide1} alt="1 slide" style={{width:"80%",height:"80%"}} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={slide2} alt="2 slide" style={{width:"80%",height:"80%"}} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={slide3} alt="3 slide" style={{width:"80%",height:"80%"}} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={slide4} alt="4 slide" style={{width:"80%",height:"80%"}} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={slide5} alt="5 slide" style={{width:"80%",height:"80%"}} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={slide6} alt="6 slide" style={{width:"80%",height:"80%"}} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={slide7} alt="7 slide" style={{width:"80%",height:"80%"}} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={slide8} alt="8 slide" style={{width:"80%",height:"80%"}} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={slide9} alt="9 slide" style={{width:"80%",height:"80%"}} />
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
    );
}

export default Features;
