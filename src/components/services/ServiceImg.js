import { Fragment } from "react";
import { useTranslation } from "react-i18next";

const ServiceImg = () => {

    const { t } = useTranslation()

    return (

        <Fragment >
            <h2 className="text-center">Service Workflow </h2>
            <img src={t('service.img')} ></img>
        </Fragment>
    )






}

export default ServiceImg