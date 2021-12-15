import React, { Fragment } from "react";
import { useTranslation } from "react-i18next"
import { Document, Outline, Page } from 'react-pdf/dist/esm/entry.webpack'
import { Button } from 'react-bootstrap'


const PdfViewer = (props) => {


    const { t } = useTranslation()

   
    const [numPages, setNumPages] = React.useState(null);
    const [pageNumber, setPageNumber] = React.useState(1);



    const onDocumentLoadSuccess = ({ numPages })=> {
        setNumPages(numPages);
        setPageNumber(1);
    }
    const onItemClick= ({ pageNumber: itemPageNumber })=> {
        setPageNumber(itemPageNumber);
    }

    const changePage = (offset) => {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    const previousPage = () => {
        changePage(-1);
    }

    const nextPage = () => {
        changePage(1);
    }

    const options = {
        cMapUrl: 'cmaps/',
        cMapPacked: true,
    };

    return (
        <Fragment>
            <Document
                file={t('role.graph.' + props.role + ".pdf")}
                options={options}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={() => console.log("error")}>

                <Outline onItemClick={onItemClick} />
                <Page pageNumber={pageNumber}
                    renderAnnotationLayer={false} />
                <Button
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                >
                    Previous
                </Button>
                <Button
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                >
                    Next
                </Button>
            </Document>

        </Fragment>
    )
}


export default PdfViewer







