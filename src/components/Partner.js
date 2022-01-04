import React from "react";
import { Row , Col } from 'react-bootstrap'
import { useTranslation } from "react-i18next";


const Partner =()=>{

    const{t}=useTranslation()
return(
   <Row>
       <h1>{t('partner.title')}</h1>
        <Col><img src="Lysa.svg" className="logocontact" ></img></Col>
        <Col><img src="Lysarc.svg" className="logocontact"></img></Col>
        <Col><img src="carnot.svg" className="logocontact"></img></Col>
        <Col><img src="ovh.svg " className="logocontact"></img></Col>
   </Row>
)




}

export default Partner