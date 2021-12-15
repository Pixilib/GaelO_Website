import React, { Fragment } from "react";
import ReactPlayer from "react-player"
import { useTranslation } from "react-i18next"
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import { Button } from 'react-bootstrap'


 const PlayerPdf = (props) => {

    const [currentView, setCurrentView] = React.useState('video')

    const { t } = useTranslation()

    const [currentPDF, setCurrentPDF] = React.useState(null)
    const [numPages, setNumPages] = React.useState(null)
    const [pageNumber, setPageNumber] = React.useState(1);


    const switchView = () => {
        let newView = currentView === 'video' ? 'pdf' : 'video'
        setCurrentView(newView)
        if(newView === 'pdf') getPdf()
        
    }

    const getPdf  = async () => {
        let pdf = await fetch(t('role.graph.' + props.role+".pdf")).then( (response)=> {
            return response.blob()
        })
        setCurrentPDF(pdf)
    }
  
    const onDocumentLoadSuccess = ({ nextNumPages }) => {
        setNumPages(nextNumPages);
      }
      const options = {
        cMapUrl: 'cmaps/',
        cMapPacked: true,
      };
    const getComponent = () => {
        switch (currentView) {
            case 'video':
                return (
                    <ReactPlayer height={'400px'} width={'700px'} url={t('role.graph.' + props.role + ".video")} />

                )

            case 'pdf':
               
                return (
                    <Fragment>
                    <Document 
                        file={t('role.graph.' + props.role+".pdf")} 
                        options={options}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError = { () => console.log("error")}
                    >{
                        Array.from(
                          new Array(numPages),
                          (el, index) => (
                            <Page
                              key={`page_${index + 1}`}
                              pageNumber={index + 1}
                            />
                          ),
                        )
                      }
                    
                    </Document>

                    </Fragment>
                )

            default:
                break;
        }
    }


    return (
            <Fragment>
                    {getComponent()}
                    <Button onClick={switchView} >  {currentView === 'video' ? 'See pdf' : 'see video'} </Button>
            </Fragment>
            
    )

}
export default PlayerPdf