import React, { useState } from "react";

import Modal, { ModalHeading } from "../../atoms/Modal";
import FolderField from "../../FolderField";
import Label from "../../atoms/Label";

import css from "./NewFile.module.scss";
import fileTypeUtils from "../../../utils/fileTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FileOptions = ({ selected, onFileTypeChange }) => {
  return (
    <div className={css.fileTypes}>
      {Object.keys(fileTypeUtils).map((fileType) => (
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
        <FolderField />
      </Label>
      <Label name="File Type">
        <FileOptions
          selected={fileType}
          onFileTypeChange={(type) => setFileType(type)}
        />
      </Label>
    </Modal>
  );
};

export default NewFile;
