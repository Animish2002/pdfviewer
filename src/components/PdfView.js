import React, { useState } from 'react';
import './pdfview.css';
import { Document, Page, pdfjs } from 'react-pdf';


pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfView = ({ pdf }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div className="wrap" onContextMenu={(e) => e.preventDefault()}>
      
        <div className="controls" onContextMenu={(e) => e.preventDefault()}>
          <button onClick={prevPage} disabled={pageNumber === 1}>
            Prev
          </button>
          <button onClick={nextPage} disabled={pageNumber === numPages}>
            Next
          </button>
        </div>

        <Document file={pdf} onLoadSuccess = {onDocumentLoadSuccess}
        onContextMenu={(e) => e.preventDefault()}  //prevents right click
        className="pdf-container">
          <Page pageNumber={pageNumber}/>
          </Document>
      </div>
  );
};

export default PdfView;
