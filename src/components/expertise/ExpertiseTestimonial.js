import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import fr from '../../lang/fr.json'

const ExpertiseTestimonial = () => {

    const { t } = useTranslation()

    const generateCarousel = () => {
        const expertiseNumero = [...Array(fr.expertise.testimonial.name.length).keys()]

        const componentArray = expertiseNumero.map((item) => {
            return (
                <Carousel.Item>
                    <div className="p-5">
                        <p className="fst-italic fw-bold" >"{t('expertise.testimonial.text.' + item)}"</p>
                        <p className="d-flex justify-content-end  ">{t('expertise.testimonial.name.' + item)}</p>
                    </div>
                </Carousel.Item>
            )
        })
        return componentArray
    }

    return (
        <Fragment>
            <Carousel
                interval={null}
                className="carousel d-flex bg-white text-dark  "
            >
                {generateCarousel()}
            </Carousel>
        </Fragment>

    )
}

export default ExpertiseTestimonial