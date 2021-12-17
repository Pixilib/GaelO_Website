import React from "react";
import { Card } from "react-bootstrap"
import { useTranslation } from "react-i18next"

import fr from '../../lang/fr.json'

const DataCard = (props) => {

    const { t } = useTranslation()


    const buildComponent = () => {
        if(!props.level) return null;
        let lignesNumber = fr.study.graph[props.level].content.length
        
        let bodyArray = []
        for(let i=0; i<lignesNumber; i++){
            bodyArray.push(<p>
                {t('study.graph.'+props.level+ '.content.'+i)}
            </p>)
        }
        
        return (
            <Card>
                <Card.Header> {t('study.graph.'+props.level+ '.title')} </Card.Header>
                <Card.Body>
                    {
                    bodyArray
                    }
                </Card.Body>
            </Card>
        )
    }



    return (
        buildComponent()
    )




}

export default DataCard