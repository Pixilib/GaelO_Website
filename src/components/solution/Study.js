import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const Study = () => {
  const { t } = useTranslation()

  const [DisplayText, setDisplayText] = React.useState(false)

  const onEnter = (level) => {

    switch (level) {
      case 'study': setDisplayText(t('study.graph.study'))
        //            console.log(DisplayText)
        break

      case 'nPatient': setDisplayText(t('study.graph.nPatient'))
        break

      case 'nVisite': setDisplayText(t('study.graph.nVisite'))
        break

      case 'nReviews': setDisplayText(t('study.graph.nReviews'))
        break

      case 'conclusion': setDisplayText(t('study.graph.conclusion'))
        break
    }
  }

  return (
    <Container className=' '>
      <Row>
        <h1 className='text-center'>{t('study.title')}</h1>
        <Col>
          <p className='text-center'>{t('study.body')}</p>
          <div className='position-relative'>
            <img src={t('study.img')} className='graphImage' />

            <div
              onMouseLeave={() => setDisplayText(null)} onMouseEnter={() => onEnter('study')}
              style={{ position: 'absolute', left: '0%', top: '0%', width: '16%', height: '100%', borderRadius: '50%' }}
            />

            <div
              onMouseLeave={() => setDisplayText(null)} onMouseEnter={() => onEnter('nPatient')}
              style={{ position: 'absolute', left: '16%', top: '0%', width: '18.5%', height: '100%' }}
            />

            <div
              onMouseLeave={() => setDisplayText(null)} onMouseEnter={() => onEnter('nVisite')}
              style={{ position: 'absolute', left: '33.5%', top: '0%', width: '23%', height: '100%' }}
            />

            <div
              onMouseLeave={() => setDisplayText(null)} onMouseEnter={() => onEnter('nReviews')}
              style={{ position: 'absolute', left: '55%', top: '0%', width: '26%', height: '100%' }}
            />

            <div
              onMouseLeave={() => setDisplayText(null)} onMouseEnter={() => onEnter('conclusion')}
              style={{ position: 'absolute', left: '77%', top: '0%', width: '23%', height: '100%' }}
            />
          </div>
        </Col>
        <Row className=''>
          <div onMouseEnter={() => setDisplayText}>
            <p className='text-center text-danger'>{DisplayText}</p>
          </div>
        </Row>
      </Row>
    </Container>

  )
}
export default Study
