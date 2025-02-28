import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import styles from './PDFViewer.module.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
    fileUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ fileUrl }) => {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    function nextPage() {
        setPageNumber((v) => ++v);
    }

    function prevPage() {
        setPageNumber((v) => --v);
    }

    return (
        <div className={styles.viewerContainer}>
            <button onClick={prevPage} disabled={pageNumber <= 1}>
                Previous
            </button>
            <button onClick={nextPage} disabled={pageNumber >= (numPages ?? -1)}>
                Next
            </button>
            <Document
                file={fileUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                className="my-react-pdf"
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );
};

export default PDFViewer;