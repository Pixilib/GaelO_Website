
import {useState} from "react"
import {Row, Col, Button} from "react-bootstrap";
import Markdown from "react-markdown"
import { useTranslation } from "react-i18next";

import mentionLegales from "../assets/md/mentions-legales.md"
import cgu from "../assets/md/cgu.md"


function Footer() {

    const [content, setContent] = useState()


    var styleFooter = {
        height: "3%",
        background: "#314053",
        color: "white"
    }
    console.log(mentionLegales)
    const { t } = useTranslation();

    const loadMentionsLegales = () => {
        fetch(mentionLegales).then((response) => response.text()).then((text) => {
            setContent(text)
          })
    }

    const loadCGU = () => {
        fetch(cgu).then((response) => response.text()).then((text) => {
            setContent(text)
          })
    }

    return (
        <div>
            <Row style={styleFooter} className="align-items-center text-center">  
                <Col className="">
                    <p>
                        <Button variant = {"link"} onClick={() => loadMentionsLegales()}>
                        {t('footer.mentions')}
                        </Button>
                        <Button variant = {"link"} onClick={() => loadCGU()}>
                        {t('footer.CGU')}
                        </Button>
                        <br/>
                        {t('footer.author')}
                    </p>
                </Col>
            </Row>
            <Row  style={styleFooter}>
                <Markdown>
                    {content}
                </Markdown>
            </Row>
        </div>
    );
  }
  
  export default Footer;