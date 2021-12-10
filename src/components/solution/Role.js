import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import { useTranslation } from "react-i18next"

const Role = (props) => {

    const { t } = useTranslation();

    const [DisplayText, setDisplayText] = React.useState(false)

    const onEnter = (props) => {

        //      console.log("je suis la fonction enter ")


        switch (props) {

            case "investigator": setDisplayText(t('solutions.graph.study'));
                //            console.log(DisplayText)
                break;

            case "controller": setDisplayText(t('solutions.graph.nPatient'));
                break;

            case "reviewer": setDisplayText(t('solutions.graph.nVisite'));
                break;

            case "supervisor": setDisplayText(t('solutions.graph.nReviews'));
                break;

            
        }

    }
    return(
        <Container>
            <Row >
            <h1 className="text-center">{t('role.title')}</h1>
                <Col>
                    <img src={t('role.img')}/>
                </Col>
            </Row>
        </Container>
    )

}
export default Role; 