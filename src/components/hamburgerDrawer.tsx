import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Text,
} from "@chakra-ui/react";

interface CustomDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  btnRef: React.RefObject<HTMLButtonElement>;
}
const HamburgerDrawer: React.FC<CustomDrawerProps> = ({
  isOpen = true,
  onClose,
  btnRef,
}) => {
  return (
    <Drawer
      finalFocusRef={btnRef}
      placement="right"
      onClose={onClose}
      isOpen={isOpen}
      size={"sm"}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
        <DrawerBody columnGap={9}>
          <Text>Some contents...</Text>
          <Text>Some contents...</Text>
          <Text>Some contents...</Text>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
export default HamburgerDrawer;
