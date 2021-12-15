import React, { Fragment } from "react";
import ReactPlayer from "react-player"
import { useTranslation } from "react-i18next"
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import { Button } from 'react-bootstrap'


const PlayerPdf = (props) => {

    const [currentView, setCurrentView] = React.useState('video')

    const { t } = useTranslation()

    const [currentPDF, setCurrentPDF] = React.useState(null)
    const [numPages, setNumPages] = React.useState(null);
    const [pageNumber, setPageNumber] = React.useState(1);


    const switchView = () => {
        let newView = currentView === 'video' ? 'pdf' : 'video'
        setCurrentView(newView)
        if (newView === 'pdf') getPdf()

    }

    const getPdf = async () => {
        let pdf = await fetch(t('role.graph.' + props.role + ".pdf")).then((response) => {
            return response.blob()
        })
        setCurrentPDF(pdf)
    }

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
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
                            file={t('role.graph.' + props.role + ".pdf")}
                            options={options}
                            onLoadSuccess={onDocumentLoadSuccess}
                            onLoadError={() => console.log("error")}
                            height={'auto'}
                        ><Page pageNumber={pageNumber} />
                            <button
                                type="button"
                                disabled={pageNumber <= 1}
                                onClick={previousPage}
                            >
                                Previous
                            </button>
                            <button
                                type="button"
                                disabled={pageNumber >= numPages}
                                onClick={nextPage}
                            >
                                Next
                            </button>
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