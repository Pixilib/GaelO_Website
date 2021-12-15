import React, { Fragment } from "react";
import ReactPlayer from "react-player"
import { useTranslation } from "react-i18next"
import { Button } from 'react-bootstrap'
import PdfViewer from "./PdfViewer";




const PlayerPdf = (props) => {

    const [currentView, setCurrentView] = React.useState('video')

    const { t } = useTranslation()


    const switchView = () => {
    
        let newView = currentView === 'video' ? 'pdf' : 'video'
        setCurrentView(newView)
        

    }


    const getComponent = () => {
        switch (currentView) {
            case 'video':
                return (
                    <ReactPlayer height={'400px'} width={'700px'} url={t('role.graph.' + props.role + ".video")} />

                )

            case 'pdf':

                return (
                    <PdfViewer role={props.role}/>
                )

            default:
                break;
        }
    }


    return (
        <Fragment>
            {getComponent()}
            <Button onClick={switchView} >  {currentView === 'video' ? 'See pdf' : 'see video'} </Button>
        </Fragment>

    )

}
export default PlayerPdf