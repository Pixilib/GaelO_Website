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
                       <div className="">
                        <p>{t('expertise.testimonial.text.'+item)}</p>
                        </div>
                        
                        <div className=" ">
                        <p>{t('expertise.testimonial.name.'+item)}</p>
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
             className=" d-flex justify-content-center align-items-center     bg-white text-dark "
             fade={true}
            >
                {generateCarousel()}
            </Carousel>
        </Fragment>

    )
}

export default ExpertiseTestimonial