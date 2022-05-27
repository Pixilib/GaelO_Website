import React from "react";
import { Container, Row, Col, OverlayTrigger, Card } from "react-bootstrap";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import ReactPlayer from "react-player";

const Role = (props) => {
  const Investigator = "investigator";
  const Controller = "controller";
  const Reviewer = "reviewer";
  const Supervisor = "supervisor";

  const { t } = useTranslation();

  const [currentRole, setCurrentRole] = React.useState(false);

  const onClickCircle = (role) => {
    setCurrentRole(role);
  };

  const openPopover = (
    <Card className="border-2 border-dark cardRole">
      <div className="position-relative">
        <button
          type="button"
          onClick={() => onClickCircle(null)}
          className="btn-close btncard"
          aria-label="Close"
        ></button>
        <Card.Header className=" border-bottom-0 ">
          <span className="text-primary fs-3  fw-bold text-center fst-italic">
            {" "}
            {t("role.graph." + currentRole + ".title")} :{" "}
          </span>
          <span className="text-center">
            {t("role.graph." + currentRole + ".content")}
          </span>
        </Card.Header>
      </div>
      {t("role.graph." + currentRole + ".video") == null ? (
        <p className="text-center">Coming Soon</p>
      ) : (
        <ReactPlayer
          controls="true"
          height={"400px"}
          width={"100%"}
          url={t("role.graph." + currentRole + ".video")}
        />
      )}
    </Card>
  );

  return (
    <Container className="pt-5 mt-5 ">
      <h2 className="dark text-center pb-3">{t("study.title")}</h2>
      <Row>
        <Col>
          <div className="position-relative">
            <img className="ImgRole" src={t("role.img")} alt="roles" />

            <div
              onMouseEnter={() => onClickCircle(Investigator)}
              style={{
                position: "absolute",
                left: "23.25%",
                top: "76.5%",
                width: "3%",
                height: "6%",
                borderRadius: "50%",
                opacity: "50%",
                cursor: "pointer",
              }}
            />

            <div
              onMouseEnter={() => onClickCircle(Controller)}
              style={{
                position: "absolute",
                left: "47.5%",
                top: "80%",
                width: "3%",
                height: "6%",
                borderRadius: "50%",
                opacity: "50%",
                cursor: "pointer",
              }}
            />

            <div
              onMouseEnter={() => onClickCircle(Reviewer)}
              style={{
                position: "absolute",
                left: "65.5%",
                top: "59.5%",
                width: "3%",
                height: "6%",
                borderRadius: "50%",
                opacity: "50%",
                cursor: "pointer",
              }}
            />

            <div
              onMouseEnter={() => onClickCircle(Supervisor)}
              style={{
                position: "absolute",
                left: "74.25%",
                top: "28.25%",
                width: "3%",
                height: "6%",
                borderRadius: "50%",
                opacity: "50%",
                cursor: "pointer",
              }}
            />

            <OverlayTrigger
              show={currentRole}
              backgroundColor="danger"
              placement="bottom"
              overlay={openPopover}
            >
              <div
                style={{
                  position: "absolute",
                  left: "40%",
                  top: "0%",
                  width: "1%",
                  height: "1%",
                  borderRadius: "50%",
                  opacity: "50%",
                }}
              />
            </OverlayTrigger>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Role;
