import React, { useRef, useState } from 'react'
import { Container, Row, Col, OverlayTrigger, Card, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import PlayerPdf from './PlayerPdf'

const Role = (props) => {
  const Investigator = 'investigator'
  const Controller = 'controller'
  const Reviewer = 'reviewer'
  const Supervisor ='supervisor'

  const { t } = useTranslation()

  const [currentRole, setCurrentRole] = React.useState(false)
 

  const onClickCircle = (role) => {
    setCurrentRole(role)
  }

  const openPopover = (
    <Card className='w-auto h-auto'>
      <h2 className='text-center'>{t('role.graph.' + currentRole + '.title')} </h2>
      <p> {t('role.graph.' + currentRole + '.content')} </p>
      <PlayerPdf role = {currentRole} />
    </Card>
  )

  return (

    <Container>
      <Row>

        <h1 className='text-center'>{t('role.title')}</h1>

        <Col>
          <div className='position-relative'>
            <img src={t('role.img')} />

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
                style={{ position: 'absolute', left: '40%', top: '5%', width: '1%', height: '1%', borderRadius: '50%', backgroundColor: 'black', opacity: '50%' }}
              />
            </OverlayTrigger>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default Role
