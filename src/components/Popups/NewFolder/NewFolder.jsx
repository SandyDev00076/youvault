import React, { useState } from "react";

import Modal, { ModalButtons, ModalHeading } from "../../atoms/Modal";
import Label from "../../atoms/Label";
import FolderField from "../../FolderField";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import TextArea from "../../atoms/TextArea";

import css from "./NewFolder.module.scss";

const NewFolder = ({ handleClose }) => {
  const [destFolder, setDestFolder] = useState(() => {
    return {
      name: null,
      id: null,
    };
  });

  function addFolder() {
    console.log(`A folder will be added at ${destFolder.name}`);
  }

  return (
    <Modal>
      <ModalHeading showClose onClose={handleClose}>
        Add Folder
      </ModalHeading>
      <Label name="Where?">
        <FolderField
          onFolderSelect={(folder) =>
            setDestFolder({
              name: folder.name,
              id: folder.id,
            })
          }
        />
      </Label>
      <Label name="Name">
        <Input />
      </Label>
      <Label name="Description">
        <TextArea />
      </Label>
      <ModalButtons>
        <Button
          type="primary"
          icon="plus"
          onClick={addFolder}
          disabled={!destFolder.name}
        >
          Add
        </Button>
        <Button icon="times" onClick={handleClose}>
          Cancel
        </Button>
      </ModalButtons>
    </Modal>
  );
};

export default NewFolder;
