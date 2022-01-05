import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

const ServiceImg =()=>{

const {t}= useTranslation()

return (


    <Fragment >
        <h2>Service Workflow </h2>
        <img className="bg-dark" src={t('service.img')} ></img>
    </Fragment>
)






}

export default ServiceImg