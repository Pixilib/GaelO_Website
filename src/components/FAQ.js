import {Row, Col, Card} from "react-bootstrap";
import { useTranslation } from "react-i18next";

function getStyleAbout(h, w) {
   
    return {
        color: "#353275"
       
    };
}

function About(props) {

    const { t } = useTranslation();
    

    return (
        <Row id="about" className="bg-light p-5 text-center align-items-center border-top" style={getStyleAbout()}>
            <h3>{t('faq.title')}</h3>
            <Col className="p-5">
                <Row className="text-start">
                    <Col md={4}>
                        <Card border="dark">
                            <Card.Header>{t('faq.question.0')}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <span className="ps-4"></span>{t('faq.answer.0')}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card border="dark">
                            <Card.Header>{t('faq.question.1')}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <span className="ps-4"></span>{t('faq.answer.1')}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card border="dark">
                            <Card.Header>{t('faq.question.2')}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <span className="ps-4"></span>{t('faq.answer.2')}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br/>
                <Row className="text-start">
                    <Col md={4} >
                        <Card border="dark">
                            <Card.Header>{t('faq.question.3')}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <p><span className="ps-4"></span>{t('faq.answer.3.0')}</p>
                                    <p><span className="ps-4"></span>{t('faq.answer.3.1')}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card border="dark">
                            <Card.Header>{t('faq.question.4')}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <ul>
                                        <li><span className="ps-4"></span>{t('faq.answer.4.0')}</li>
                                        <li>- {t('faq.answer.4.1')}</li>
                                        <li>- {t('faq.answer.4.2')}</li>
                                        <li>- {t('faq.answer.4.3')}</li>
                                        <li>- {t('faq.answer.4.4')}</li>
                                        <li>- {t('faq.answer.4.5')}</li>
                                        <li>- {t('faq.answer.4.6')}</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
  }
  
  export default About;