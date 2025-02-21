import React from 'react';
import { Viewer, Worker, SpecialZoomLevel, ScrollMode } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import styles from './PDFViewer.module.css';

interface PDFViewerProps {
    fileUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ fileUrl }) => {
    return (
        <div className={styles.viewerContainer}>
            <Worker workerUrl="//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
                <Viewer 
                    fileUrl={fileUrl} 
                    defaultScale={SpecialZoomLevel.PageWidth}
                />
            </Worker>
        </div>
    );
};

export default PDFViewer;