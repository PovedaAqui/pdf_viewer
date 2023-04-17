import DrawerBar from "@/components/drawer";
import React, { useState } from "react";
import { Document, Page, Outline } from "react-pdf";
import { Flex, Box, Button, Text, VStack } from "@chakra-ui/react";
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
    <Flex direction={"column"} alignItems={"center"}>
      <Box maxW="800px">
        <Document
          file={"sample.pdf"}
          onLoadSuccess={onDocumentLoadSuccess}
          options={{
            cMapUrl: "cmaps/",
            cMapPacked: true,
            standardFontDataUrl: "standard_fonts/",
          }}
        >
          <Outline onItemClick={onItemClick} />
          <Page pageNumber={pageNumber} />
        </Document>
      </Box>
      <Box mt="4" textAlign="center">
        <Text as="span" mx="2">
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </Text>
      </Box>
      <Box mt="4" textAlign="center">
        <Button
          colorScheme="blue"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Previous
        </Button>
        <Button
          colorScheme="blue"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </Button>
      </Box>
    </Flex>
  );
}
