import { Row, Col } from "../../node_modules/react-bootstrap";
import { useTranslation } from "react-i18next";

function getStyleGaelo() {

    return {
        color: "#353275"

    };
}
function Gaelo(props) {

    const { t } = useTranslation();


    return (
        <Row id="gaelo" className="bg-light p-5" style={getStyleGaelo()}>
            <Col md={6} >
                <div className="h-100 d-flex align-items-center">
                    {t('gaelo.body')}
                </div>
            </Col>
            <Col md={6} className="text-center align-items-center">
                <iframe className="embed-responsive-item d-block w-100" src={t('header.linkVideo')} style={{ width: "100%", height: "360px" }} title="Video presentation Gaelo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Col>
        </Row>
    );
}

export default Gaelo;