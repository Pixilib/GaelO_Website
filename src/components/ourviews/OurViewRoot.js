import { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import KeyFactorSuccess from './KeyFactorSuccess'
import OurViewsText from './OurViewsText'

const OurViewRoot = () => {
    const { t } = useTranslation()
    return (
        <Fragment>
            <OurViewsText />
            <Container>
                <KeyFactorSuccess />
            </Container>
        </Fragment>
    )
}

export default OurViewRoot