
import {  Modal,  } from "react-bootstrap";
import { useTranslation } from "react-i18next"
import ReactPlayer from "react-player";



function VideoModal(props) {
    const { t } = useTranslation();
    return (
        <Modal
            {...props}
            size="xl"
            fullscreen="md-down"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <ReactPlayer height="800px" url={t('header.linkVideo')} width="100%" />
            </Modal.Body>

        </Modal>
    );
}export default VideoModal