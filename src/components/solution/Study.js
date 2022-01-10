import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import StudyCard from './StudyCard'

const Study = () => {
  const { t } = useTranslation()

  const [currentData, setCurrentData] = React.useState(null)

  const Study = 'study'
  const NPatient = 'nPatient'
  const NVisite = 'nVisite'
  const NReviews = 'nReviews'
  const Conclusion = 'conclusion'

  return (
    <Container className='testborder' >
      <Row >
        <Col md="3" className="d-flex align-items-center" >
          <h2 className='text-center'>Structure de données </h2>
        </Col>
        <Col>
          <Row >
          <div className='position-relative' onMouseLeave={() => setCurrentData(null)}>
            <img className='w-100' src={t('study.img')} alt='Graph d etude' />
            <div
              onMouseEnter={() => setCurrentData(Study)}
              style={{ position: 'absolute', left: '0%', top: '0%', width: '16%', height: '100%', borderRadius: '50%' }}
            />
            <div
              onMouseEnter={() => setCurrentData(NPatient)}
              style={{ position: 'absolute', left: '16%', top: '0%', width: '18.5%', height: '100%', }}
            />
            <div
              onMouseEnter={() => setCurrentData(NVisite)}
              style={{ position: 'absolute', left: '33.5%', top: '0%', width: '23%', height: '100%' }}
            />
            <div
              onMouseEnter={() => setCurrentData(NReviews)}
              style={{ position: 'absolute', left: '55%', top: '0%', width: '26%', height: '100%' }}
            />
            <div
              onMouseEnter={() => setCurrentData(Conclusion)}
              style={{ position: 'absolute', left: '77%', top: '0%', width: '23%', height: '100%' }}
            />
          </div>
          </Row>
        </Col>
        
      </Row>
          <Row className='d-flex justify-content-center'>
            <StudyCard level={currentData} />
          </Row>



    </Container>
  )
}
export default Study
