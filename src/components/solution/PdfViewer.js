import React, { Fragment } from "react";
import { useTranslation } from "react-i18next"
import { Document, Outline, Page } from 'react-pdf/dist/esm/entry.webpack'
import { Button } from 'react-bootstrap'


const PdfViewer = (props) => {


    const { t } = useTranslation()


    const [numPages, setNumPages] = React.useState(null);
    const [pageNumber, setPageNumber] = React.useState(1);



    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
    }
    const onItemClick = ({ pageNumber: itemPageNumber }) => {
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
                <div className="d-flex justify-content-between">
                    <Button
                        className=" bg-transparent text-dark fw-bold border-0 shadow-none"
                        disabled={pageNumber <= 1}
                        onClick={previousPage}
                    >
                        &#12296;
                    </Button>
                    <span className="align-self-center"> {pageNumber} / {numPages} </span>
                    <Button
                        className="bg-transparent text-dark fw-bold border-0 shadow-none"
                        type="button"
                        disabled={pageNumber >= numPages}
                        onClick={nextPage}
                    >
                        &#12297;
                    </Button>
                </div>
            </Document>

        </Fragment>
    )
}


export default PdfViewer







