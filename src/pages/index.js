import React from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';


export default function Test() {
  return (
    <Document file={'sample.pdf'}
      options={{
        cMapUrl: 'cmaps/',
        cMapPacked: true,
        standardFontDataUrl: 'standard_fonts/',
      }}
    >
      <Page pageNumber={1} />
    </Document>
  );
}