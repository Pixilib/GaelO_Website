import React from "react";

import { Modal } from "react-bootstrap";
import Markdown from "react-markdown";
import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

const MarkdownModal = (props) => {
  const { t } = useTranslation();
  const [content, setContent] = useState(null);

  useEffect(() => {
    console.log(props.url);
    fetch(t("footer." + props.url))
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, [t, props.url]);

  return (
    <Modal
      {...props}
      size="xl"
      fullscreen="md-down"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Markdown>{content}</Markdown>
      </Modal.Body>
    </Modal>
  );
};

export default MarkdownModal;
