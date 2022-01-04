import React from "react";
import { Modal, ModalBody } from "react-bootstrap";

const ModalForm =(props) =>{


    return(
        <Modal
        {...props}
        size='xl'
        fullscreen='md-down'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        >
            <Modal.Body>
            <iframe height='800px' width='75%' src="https://cdn.forms-content.sg-form.com/484b213d-6ca2-11ec-9aca-86faac9e4b7c"/>
            </Modal.Body>
        </Modal>
    )


}

export default ModalForm