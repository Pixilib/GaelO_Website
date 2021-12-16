import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const Study = () => {
  const { t } = useTranslation()

  const [DisplayTitle, setDisplayTitle] = React.useState(false)
  const [DisplayContent, setDisplayContent] = React.useState(false)

  const onEnter = (level) => {

    switch (level) {
      case 'study': setDisplayTitle(t('study.graph.studyT'))
      setDisplayContent(t('study.graph.studyC'))
        //            console.log(DisplayTitle)
        break

      case 'nPatient': setDisplayTitle(t('study.graph.nPatientT'))
      setDisplayContent(t('study.graph.nPatientC'))
        break

      case 'nVisite': setDisplayTitle(t('study.graph.nVisiteT'))
      setDisplayContent(t('study.graph.nVisiteC'))
        break

      case 'nReviews': setDisplayTitle(t('study.graph.nReviewsT'))
      setDisplayContent(t('study.graph.nReviewsC'))
        break

      case 'conclusion': setDisplayTitle(t('study.graph.conclusionT'))
      setDisplayContent(t('study.graph.conclusionC'))
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
              onMouseLeave={() => setDisplayTitle(null)} 
              onMouseOut={() => setDisplayContent(null)}
              onMouseEnter={() => onEnter('study')}
              style={{ position: 'absolute', left: '0%', top: '0%', width: '16%', height: '100%', borderRadius: '50%' }}
            />

            <div
              onMouseLeave={() => setDisplayTitle(null)} 
              onMouseOut={() => setDisplayContent(null)}
              onMouseEnter={() => onEnter('nPatient')}
              style={{ position: 'absolute', left: '16%', top: '0%', width: '18.5%', height: '100%' }}
            />

            <div
              onMouseLeave={() => setDisplayTitle(null)}
              onMouseOut={() => setDisplayContent(null)}
              onMouseEnter={() => onEnter('nVisite')}
              style={{ position: 'absolute', left: '33.5%', top: '0%', width: '23%', height: '100%' }}
            />

            <div
              onMouseLeave={() => setDisplayTitle(null)} 
              onMouseOut={() => setDisplayContent(null)}
              onMouseEnter={() => onEnter('nReviews')}
              style={{ position: 'absolute', left: '55%', top: '0%', width: '26%', height: '100%' }}
            />

            <div
              onMouseLeave={() => setDisplayTitle(null)} 
              onMouseOut={() => setDisplayContent(null)}
              onMouseEnter={() => onEnter('conclusion')}
              style={{ position: 'absolute', left: '77%', top: '0%', width: '23%', height: '100%' }}
            />
          </div>
        </Col>
        <Row className='d-flex justify-content-center'>
          <div onMouseEnter={() => setDisplayTitle}>
            <p className='text-center d-flex justify-content-center fs-4  '>{DisplayTitle}</p>
            <p className='text-center d-flex justify-content-center pl-3 fst-italic w-50 mx-auto'>{DisplayContent}</p>
          </div>
        </Row>
      </Row>
    </Container>

  )
}
export default Study
