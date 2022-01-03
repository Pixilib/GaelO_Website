import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import fr from '../../lang/fr.json'
import FactorCarouselExpertise from "./FactorCarouselExpertise";


const ExpertiseTestimonial = () => {

    const { t } = useTranslation()

    const generateCarousel = () => {
        const expertiseNumero = [...Array(fr.expertise.testimonial.name.length).keys()]

        const componentArray = expertiseNumero.map((item) => {
            return (
                <Carousel.Item>
                       
                        <p>{t('expertise.testimonial.text.'+item)}</p>
                        <p>{t('expertise.testimonial.name.'+item)}</p>
                        
                </Carousel.Item>
            )
        })
        return componentArray
    }

    return (
        <Fragment>
            <Carousel className="bg-dark text-secondary">
                {generateCarousel()}
            </Carousel>
        </Fragment>

    )
}

export default ExpertiseTestimonial