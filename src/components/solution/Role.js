import React from 'react'
import { Container, Row, Col, OverlayTrigger, Card } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import ReactPlayer from "react-player"

const Role = (props) => {
  const Investigator = 'investigator'
  const Controller = 'controller'
  const Reviewer = 'reviewer'
  const Supervisor = 'supervisor'

  const { t } = useTranslation()

  const [currentRole, setCurrentRole] = React.useState(false)


  const onClickCircle = (role) => {
    setCurrentRole(role)
  }

  const openPopover = (
    <Card className='border-2 CardRole'>
      <div className='position-relative' >
        <button
          type="button" onClick={() => onClickCircle(null)} className="btn-close btncard" aria-label="Close">
        </button>
        <Card.Header className=' border-bottom-0 '>

          <span className='text-center text-primary fs-3  fw-bold text-center fst-italic'> {t('role.graph.' + currentRole + '.title')}  : </span>
          <span>{t('role.graph.' + currentRole + '.content')}</span>
        </Card.Header>
      </div>

      <ReactPlayer controls="true" height={'400px'} width={'700px'} url={t('role.graph.' + currentRole + ".video")} />
    </Card>
  )

  return (

    <Container >
      <h1 className='text-center'>{t('study.title')}</h1>
      <Row>
        <Col>
          <div className='position-relative'>
            <img className='ImgRole ' src={t('role.img')} alt='Design des roles' />

            <div
              onMouseLeave={() => onClickCircle(Investigator)}
              style={{ position: 'absolute', left: '23.25%', top: '76.5%', width: '3%', height: '6%', borderRadius: '50%', backgroundColor: 'red', opacity: '50%' }}
            />

            <div
              onMouseEnter={() => onClickCircle(Controller)}
              style={{ position: 'absolute', left: '47.5%', top: '80%', width: '3%', height: '6%', borderRadius: '50%', backgroundColor: 'blue', opacity: '50%' }}
            />

            <div
              onMouseEnter={() => onClickCircle(Reviewer)}
              style={{ position: 'absolute', left: '65.5%', top: '59.5%', width: '3%', height: '6%', borderRadius: '50%', backgroundColor: 'pink', opacity: '50%' }}
            />

            <div
              onMouseEnter={() => onClickCircle(Supervisor)}
              style={{ position: 'absolute', left: '74.25%', top: '28.25%', width: '3%', height: '6%', borderRadius: '50%', backgroundColor: 'green', opacity: '50%' }}
            />

            <OverlayTrigger show={currentRole} backgroundColor='danger' placement='bottom' overlay={openPopover}>
              <div
                style={{ position: 'absolute', left: '40%', top: '0%', width: '1%', height: '1%', borderRadius: '50%', backgroundColor: 'black', opacity: '50%' }}
              />
            </OverlayTrigger>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default Role
