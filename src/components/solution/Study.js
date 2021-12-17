import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import DataCard from './DataCard'

const Study = () => {
  const { t } = useTranslation()

  const [DisplayTitle, setDisplayTitle] = React.useState(false)
  const [DisplayContent, setDisplayContent] = React.useState(false)
  const [currentData , setCurrentData]=React.useState(null)

  const Study = 'study'
  const NPatient = 'nPatient'
  const NVisite = 'nVisite'
  const NReviews ='nReviews'
  const Conclusion ='conclusion'


    
  

  return (
    <Container onMouseLeave={()=>setCurrentData(null)}>
      <Row>
        <Col>
            <h2 className='text-center'>Structure de données </h2>
            <div className='position-relative'>
              <img className='w-100' src={t('study.img')}   />
              <div
                onMouseEnter={() => setCurrentData(Study)}
                style={{ position: 'absolute', left: '0%', top: '0%', width: '16%', height: '100%' ,borderRadius: '50%' }}
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
        </Col>
        <Row className='d-flex justify-content-center'>
          <DataCard level={currentData}/>
        </Row>
      </Row>
    </Container>

  )
}
export default Study
