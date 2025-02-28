import React from 'react';
import { PDFViewer } from '../components/PDFViewer';

const Resume = () => {
    return (
        <PDFViewer fileUrl="/Resume.pdf" />
    );
};

export default Resume;