import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Markdown from "react-markdown";
import cgu from '../../assets/md/cgu.md'
import ml from '../../assets/md/mentions-legales.md'

const MarkdownModal = (props) => {


    const { t } = useTranslation()
    const [content, setContent] = useState(null)
    let url='../../assets/md/'
 
            useEffect(()=>{
                fetch(props.url).then((response)=>response.text()).then((text)=>
                setContent(text)
                )
            },[props.maprops]);
   
    return (
        <Modal
            {...props}
            size='xl'
            fullscreen='md-down'
            aria-labelledby='contained-modal-title-vcenter'
            centered>
        
            <Modal.Body>
                <Markdown >
                    {content}
                </Markdown>
            </Modal.Body>


        </Modal>
    )

}

export default MarkdownModal