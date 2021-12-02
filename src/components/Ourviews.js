import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next"

const ourViews = (props) => {

    const { t } = useTranslation();
    return (
        <Container>
            <Row>
                <h1>{t('ourviews.title')}</h1>
                <p>{t('ourviews.body1')}</p>
                <p>{t('ourviews.body2')}</p>
            </Row>
            <Row>
                <h2>{t('ourviews.subtitle')}</h2>
            </Row>
            {/*<CreateCard/>*/}
        </Container>
    )
}
    
