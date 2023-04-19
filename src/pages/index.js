import DrawerBar from "@/components/Drawer";
import React, { useState } from "react";
import { Document, Page, Outline } from "react-pdf";
import { Flex, Box, Button, Text, VStack, HStack } from "@chakra-ui/react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

export default function Test() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  function onItemClick({ pageNumber: itemPageNumber }) {
    setPageNumber(itemPageNumber);
  }

  return (
    <Flex>
      <Box>
        <Document
          file={"sample.pdf"}
          onLoadSuccess={onDocumentLoadSuccess}
          options={{
            cMapUrl: "cmaps/",
            cMapPacked: true,
            standardFontDataUrl: "standard_fonts/",
          }}
        >
          <Box>
            <DrawerBar outline={<Outline onItemClick={onItemClick} />} />
          </Box>
          <Page pageNumber={pageNumber} />
        </Document>
      </Box>
    </Flex>
  );
}
