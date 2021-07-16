import {Row, Col, Figure} from "../../node_modules/react-bootstrap";
import { useTranslation } from "react-i18next";
import GaeloRole from "../assets/images/gaelo_role.png";
import GaeloStep from "../assets/images/gaelo_step.png";


function getStyleWork(){
    return {
        color: "#353275"
    }
}
function Work(props) {

    const { t } = useTranslation();

    return (
        <Row id="work" className="bg-light p-5 text-center align-items-center border-top" style={getStyleWork()}>
            <h3>{t('work.title')}</h3>
            <Col md={6}>
                <h4>{t('work.subtitle.0')}</h4>
                <Figure>
                    <Figure.Image alt="Image structure gaelo" src={GaeloRole} />
                </Figure>
            </Col>
            <Col md={6}>
                <h4>{t('work.subtitle.0')}</h4>
                <Figure>
                    <Figure.Image alt="Image structure gaelo" src={GaeloStep} />
                </Figure>
            </Col>
        </Row>
    );
}

export default Work;
