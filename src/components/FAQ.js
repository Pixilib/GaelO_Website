import {Row, Col, Card} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import fr from "../lang/fr.json"

function getStyleAbout(h, w) {
   
    return {
        color: "#353275"
       
    };
}

const About = (props) => {

    const { t } = useTranslation();

    const generateCard = () =>{
        let faqNumber = [...Array(fr.faq.question.length).keys()];

        let componentArray = faqNumber.map( (item) => { 
            return (
                <Card key={'cardFaq'+item} border="dark">
                    <Card.Header>{t('faq.question.'+item)}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <span className="ps-4">
                                {t('faq.answer.'+item)}
                            </span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )
            
         })

         return componentArray
    }     

    return (
        <Row id="about" className="bg-light p-5 text-center align-items-center border-top" style={getStyleAbout()}>
            <h3>{t('faq.title')}</h3>
            <Col className="p-5">
                <Row className="text-start">
                    {generateCard()}
                </Row>
            </Col>
        </Row>
    );
  }
  
  export default About;