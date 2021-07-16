
import {Row, Col} from "react-bootstrap";
import { useTranslation } from "react-i18next";


function Footer() {
    var styleFooter = {
        height: "3%",
        background: "#314053",
        color: "white"
    }
    const { t } = useTranslation();
    return (
        <Row style={styleFooter} className="align-items-center text-center">  
            <Col className="">
                <p>
                    {t('footer.CGU')}<br/>
                    {t('footer.create')}
                </p>

            </Col>
            
        </Row>
    );
  }
  
  export default Footer;