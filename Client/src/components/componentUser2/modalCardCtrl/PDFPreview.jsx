import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PDFPreview = ({ pdfBlob }) => {
    return (
        <div style={{ width: '100%', height: '500px' }}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.min.js`}>

                <Viewer fileUrl={pdfBlob} />
            </Worker>
        </div>
    );
};

export default PDFPreview;
