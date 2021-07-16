import {Row, Col} from "../../node_modules/react-bootstrap";
import { useTranslation } from "react-i18next";

function getStyleContact() {
   
    return {
        color: "#353275"
       
    };
}
function Contact(props) {

    const { t } = useTranslation();
    
    
    return (
        <Row id="contact" className="bg-light p-5 text-center align-items-center border-top" style={getStyleContact()}>
            <Col className="text-center align-items-center w-50">
                <h3>{t('contact.title')}</h3>
                <p>{t('contact.body')}</p>
                <p>{t('contact.source')} <a href="https://github.com/salimkanoun/GaelO">https://github.com/salimkanoun/GaelO</a></p>
                <h4>{t('contact.subtitle')}</h4>
                <p>
                    <p>{t('contact.contributors.0')} - {t('contact.mail.0')}</p>
                    <p>{t('contact.contributors.1')}</p>
                </p>
            </Col>
        </Row>
    );
  }
  
  export default Contact;