import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";

const DrawerBar = ({ open, toggle }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      {/* <IconButton ref={btnRef} colorScheme="teal" onClick={onOpen} /> */}
      <Drawer
        isOpen={open}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClick={toggle} />
          <DrawerHeader>Create your account</DrawerHeader>

          {/* <DrawerBody>{outline}</DrawerBody> */}
          <DrawerBody>TEST</DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={toggle}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerBar;
