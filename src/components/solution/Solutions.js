import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next"

const Solutions = (props) => {

    const { t } = useTranslation();
    
   /*document.addEventListener('click', (event) => {
        console.log(`je suis le client Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
        console.log(` je suis la page Mouse X: ${event.pageX}, Mouse Y: ${event.pageY}`);
        console.log(`je suis le offset Mouse X: ${event.offsetX}, Mouse Y: ${event.offsetY}`);
    });*/

    const [showResults, setShowResults] = React.useState(false)

    const onEnter = () => {
    
         switch (onEnter){
         
         case 'study': (setDisplayText('mon texte à afficher')
         case 'nPatient':(setDisplayText('mon texte à afficher')
         case 'nVisite':(setDisplayText('mon texte à afficher')
         case 'nReviews':(setDisplayText('mon texte à afficher')
         case 'conclusion':(setDisplayText('mon texte à afficher')
          }}
        
    
   

   
        
   /*const coucou=()=>{
        console.log(props.alt)}
    const coucou1=()=>{
        console.log('patient!')}
    const coucou2=()=>{
        console.log('visite')}
    const coucou3=()=>{
        console.log('relecture')}
    const coucou4=()=>{
        console.log('conclusion')}
    */

    return (
        <Container>
            <Row>
               
                <Col>
                
                    <h1>{t('solutions.title')}</h1>
                    <p>{t('solutions.body')}</p>
                    <img src="solution.png" className="imgTest" useMap="#solutionmap" />
                    <map name="solutionmap">
                        <area onMouseEnter={() => onEnter('Study')} alt="0" shape="circle" coords="80,76,65"/>
                        <area onMouseEnter={onEnter} alt="1" shape="rect" coords="163,10 ,305,143"/>
                        <area onMouseEnter={onEnter} alt="2" shape="rect" coords="364,10 ,504,143"/>
                        <area onMouseEnter={onEnter} alt="3" shape="rect" coords="565,10 ,736,143"/>
                        <area onMouseEnter={onEnter} alt="4" shape="rect" coords="805,10 ,936,143"/>
                    </map>
                </Col>
                <Col>
                
                    <div onMouseEnter={()=> setShowResults} >
                        
                        {showResults && <p>{t('solutions.hover.i')}</p>}
                    
                </div>
                </Col>
            </Row>
          
        </Container>

    )
}
export default Solutions;