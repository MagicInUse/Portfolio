import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styles from "./PDFViewer.module.css";
import { useEffect } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
    fileUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ fileUrl }) => {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [pageWidth, setPageWidth] = useState<number>(Math.min(860, window.innerWidth - 40));

    useEffect(() => {
        function handleResize() {
            setPageWidth(Math.min(860, window.innerWidth - 40));
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    function nextPage() {
        setPageNumber((v) => Math.min(v + 1, numPages ?? v));
    }

    function prevPage() {
        setPageNumber((v) => Math.max(v - 1, 1));
    }

    return (
        <div className={styles.viewerContainer}>
            <div className={styles.controls}>
                <button onClick={prevPage} disabled={pageNumber <= 1} className={styles.button}>
                    Previous
                </button>
                <p className={styles.pageInfo}>
                    Page {pageNumber} of {numPages}
                </p>
                <button onClick={nextPage} disabled={pageNumber >= (numPages ?? -1)} className={styles.button}>
                    Next
                </button>
            </div>
            <div className={styles.pdfContainer}>
                <Document
                    file={fileUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page
                        pageNumber={pageNumber}
                        renderAnnotationLayer={false}
                        width={pageWidth}
                        renderTextLayer={false} // This prop can help reduce extra rendering issues
                    />
                </Document>
            </div>
        </div>
    );
};

export default PDFViewer;