import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import "../styles/HomePage.css"
import ReactPlayer from "react-player";

export default function ModalWithVideo() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
        <div className="vidbg">
        <Button onClick={onOpen} position="none" marginTop="25%" marginLeft="47%">
        <img
          width="50%"
          src="https://img.icons8.com/ios-glyphs/30/000000/play--v1.png"
        />
      </Button>

      <Modal isOpen={isOpen} size="2xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ReactPlayer
            controls
            playing={true}
            width="42rem"
            muted={false}
            url="https://youtu.be/ALoHpNVj7R4"
          />
        </ModalContent>
      </Modal>
        </div>
    </div>
  );
}
