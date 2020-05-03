import React, { useState } from "react";

import Modal, { ModalHeading } from "../../atoms/Modal";
import FolderField from "../../FolderField";
import Label from "../../atoms/Label";
import fileTypeUtils from "../../../utils/fileTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Forms from "./Forms";
import Button from "../../atoms/Button";

import css from "./NewFile.module.scss";

const FileOptions = ({ selected, onFileTypeChange }) => {
  return (
    <div className={css.fileTypes}>
      {Object.keys(fileTypeUtils)
        .filter((fileType) => fileType !== "folder")
        .map((fileType) => (
          <div
            tabIndex={0}
            key={fileType}
            className={`${css.fileType} ${
              selected === fileType && css.typeSelected
            }`}
            onClick={() => onFileTypeChange(fileType)}
          >
            <FontAwesomeIcon
              icon={fileTypeUtils[fileType].icon}
              className={css.optionIcon}
            />
            <div className={css.typeName}>{fileType}</div>
          </div>
        ))}
    </div>
  );
};

const NewFile = ({ handleClose }) => {
  const [fileType, setFileType] = useState(() => null);
  return (
    <Modal>
      <ModalHeading showClose onClose={handleClose}>
        Add File
      </ModalHeading>
      <Label name="Where?">
        {/* TODO: Make a request object for adding a file */}
        <FolderField
          onFolderSelect={(folder) =>
            console.log(`A new file will be added at ${folder.name}`)
          }
        />
      </Label>
      {!fileType && (
        <Label name="Which kind of file?">
          <FileOptions
            selected={fileType}
            onFileTypeChange={(type) => setFileType(type)}
          />
        </Label>
      )}
      {fileType && (
        <>
          <Button
            icon="arrow-left"
            type="primary"
            className={css.selectAnother}
            small
            onClick={() => setFileType(null)}
          >
            Select another type
          </Button>
          <Forms fileType={fileType} onClose={handleClose} />
        </>
      )}
    </Modal>
  );
};

export default NewFile;
