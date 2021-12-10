import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next"

const Study = (props) => {

    const { t } = useTranslation();



/*     document.addEventListener('click', (event) => {
        // console.log(`je suis le client Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
        //console.log(` je suis la page Mouse X: ${event.pageX}, Mouse Y: ${event.pageY}`);
        console.log(`je suis le offset Mouse X: ${event.offsetX}, Mouse Y: ${event.offsetY}`);
    }); */

    const [DisplayText, setDisplayText] = React.useState(false)

    const onEnter = (props) => {

        //      console.log("je suis la fonction enter ")


        switch (props) {

            case "study": setDisplayText(t('study.graph.study'));
                //            console.log(DisplayText)
                break;

            case "nPatient": setDisplayText(t('study.graph.nPatient'));
                break;

            case "nVisite": setDisplayText(t('study.graph.nVisite'));
                break;

            case "nReviews": setDisplayText(t('study.graph.nReviews'));
                break;

            case "conclusion": setDisplayText(t('study.graph.conclusion'));
                break;
        }

    }


    /*
        const coucou = () => {
            console.log('etude')
        }
        const coucou1 = () => {
            console.log('patient!')
        }
        const coucou2 = () => {
            console.log('visite')
        }
        const coucou3 = () => {
            console.log('relecture')
        }
        const coucou4 = () => {
            console.log('conclusion')
        }
    
    */
    return (
        <Container>
            <Row>
            <h1 className="text-center">{t('study.title')}</h1>
                <Col>
                    <p className="text-center">{t('study.body')}</p>
                    <div className="position-relative">
                        <img src={t('study.img')} className="graphImage"/>

                        <div onMouseLeave={() => setDisplayText(null)} onMouseEnter={() => onEnter('study')}
                            style={{ position: "absolute", left: "0%", top: "0%", width: "16%", height: "100%", borderRadius: "50%" }} />

                        <div onMouseLeave={() => setDisplayText(null)} onMouseEnter={() => onEnter('nPatient')}
                            style={{ position: "absolute", left: "16%", top: "0%", width: "18.5%", height: "100%" }} />

                        <div onMouseLeave={() => setDisplayText(null)} onMouseEnter={() => onEnter('nVisite')}
                            style={{ position: "absolute", left: "33.5%", top: "0%", width: "23%", height: "100%" }} />

                        <div onMouseLeave={() => setDisplayText(null)} onMouseEnter={() => onEnter('nReviews')}
                            style={{ position: "absolute", left: "55%", top: "0%", width: "26%", height: "100%" }} />

                        <div onMouseLeave={() => setDisplayText(null)} onMouseEnter={() => onEnter('conclusion')}
                            style={{ position: "absolute", left: "77%", top: "0%", width: "23%", height: "100%" }} />
                    </div>
                </Col>
                <Row >
                    <div onMouseEnter={() => setDisplayText} >
                        <p className="text-center">{DisplayText}</p>
                    </div>
                </Row>
            </Row>
        </Container>

    )
}
export default Study;