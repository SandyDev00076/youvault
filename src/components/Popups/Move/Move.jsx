import React, { useState } from "react";

import Modal, { ModalHeading, ModalButtons } from "../../atoms/Modal/Modal";
import FolderField from "../../FolderField/FolderField";
import Label from "../../atoms/Label";
import Button from "../../atoms/Button/Button";

const MoveTo = ({ item, handleClose }) => {
  const [selectedFolder, setSelectedFolder] = useState(() => {
    return {
      name: "",
      id: "",
    };
  });

  function moveItem() {
    // TODO: What to do to move the item
    console.log(`moving item ${item.name} to ${selectedFolder.name}`);
  }

  return (
    <Modal>
      <ModalHeading showClose onClose={handleClose}>
        Move To
      </ModalHeading>
      <Label name="Where?">
        <FolderField
          onFolderSelect={(folder) =>
            setSelectedFolder({
              name: folder.name,
              id: folder.id,
            })
          }
        />
      </Label>
      <ModalButtons>
        <Button
          type="primary"
          icon="cut"
          onClick={moveItem}
          disabled={!selectedFolder.name}
        >
          Move
        </Button>
        <Button icon="times" onClick={handleClose}>
          Cancel
        </Button>
      </ModalButtons>
    </Modal>
  );
};

export default MoveTo;
