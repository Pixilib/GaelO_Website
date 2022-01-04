import React, { Fragment } from "react";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import fr from '../../lang/fr.json'

const Ourteam =()=>{

    const{t}=useTranslation()

    const generateTeam=()=>{

        const teamNumero=[...Array(fr.team.name.length).keys()]

        const componentArray = teamNumero.map((item) => {
            return (
                <Col>
                <p>{t('team.name.'+item)}</p>
                <img src={t('team.img.'+item)}></img>
                <p>{t('team.text.'+item)}</p>
                <p>{t('team.role.'+item)}</p>
                </Col>
            )
        })
        return componentArray
    }

    return(
        <Fragment>
            <h1>{t('team.title')}</h1>
            {generateTeam()}
        </Fragment>
    )
}

export default Ourteam