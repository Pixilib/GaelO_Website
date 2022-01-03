import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

const ServiceIntro = () => {

    const {t} = useTranslation()


    return(
        <Fragment>
            <h1>{t('service.title')} </h1>
            <p>{t('service.intro')}</p>
            <p>{t('service.content')}</p>
        </Fragment>
    )

}

export default ServiceIntro