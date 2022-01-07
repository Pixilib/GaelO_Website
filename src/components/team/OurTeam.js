import { Fragment } from "react";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import fr from '../../lang/fr.json'

const Ourteam = () => {

    const { t } = useTranslation()

    const generateTeam = () => {

        const teamNumero = [...Array(fr.team.name.length).keys()]

        const componentArray = teamNumero.map((item) => {
            return (
                <Col className="d-flex flex-column">
                    <p className="text-center fw-bold text-primary">{t('team.name.' + item)}</p>
                    <img className="d-flex align-self-center w-50" src={t('team.img.' + item)}></img>
                    <p className='text-center fw-bold text-info' >{t('team.role.' + item)}</p>
                    <p className='text-center text-dark' >{t('team.text.' + item)}</p>
                </Col>
            )
        })
        return componentArray
    }

    return (
        <Fragment>
            <h1 className="text-center">{t('team.title')}</h1>
            {generateTeam()}
        </Fragment>
    )
}

export default Ourteam