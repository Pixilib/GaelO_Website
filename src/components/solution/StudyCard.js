import { Card , Row } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import fr from '../../lang/fr.json'

const StudyCard = (props) => {

    const { t } = useTranslation()


    const buildComponent = () => {
        if (!props.level) return null;
        let lignesNumber = fr.study.graph[props.level].content.length

        let bodyArray = []
        for (let i = 0; i < lignesNumber; i++) {
            bodyArray.push(<p>
                {t('study.graph.' + props.level + '.content.' + i)}
            </p>)
        }

        return (
            <Row>
                <Card className="mt-4 border-2 bg-light">
                    <Card.Header className=" bg-light border-bottom-0 text-primary fw-bold fs-3 text-center"> {t('study.graph.' + props.level + '.title')} </Card.Header>
                    <Card.Body className=" text-dark text-center fst-italic">
                        {
                            bodyArray
                        }
                    </Card.Body>
                </Card>
                </Row>
                        )
            
    }

    return (
        buildComponent()
    )
}

export default StudyCard