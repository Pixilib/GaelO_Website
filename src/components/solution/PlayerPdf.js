import ReactPlayer from "react-player";
import { Document } from "react-pdf"
import { useTranslation } from "react-i18next";
import { Button } from 'react-bootstrap'


 const PlayerPdf = (props) => {

    const { t } = useTranslation()
    const GetComponentToDisplay = () => {

    }

    const changeComponent = (props) => {

        switch (props) {
            case video:
                <div>
                    <ReactPlayer height={'400px'} width={'700px'} url={t('role.graph.' + props.currentRole + ".video")} />
                    <Button >  Regarder la doc  </Button>
                </div>
                break;

            case pdf:
                <div>
                    <Document file={t('role.graph.' + props.currentRole+".pdf")} height={'400px'} width={'700px'}  />
                    <Button >  Regarder la video  </Button>
                </div>

                break;

            default:
                break;
        }
    }


    return (
        <changeComponent />
    )

}
export default PlayerPdf