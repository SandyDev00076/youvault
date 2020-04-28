import React from "react";

import Modal, { ModalHeading, ModalButtons } from "../../atoms/Modal";
import Button from "../../atoms/Button/Button";

import css from "./Delete.module.scss";

const Delete = ({ item, handleClose }) => {
  function deleteItem() {
    console.log(`Deleting the item ${item.name}`);
  }

  return (
    <Modal>
      <ModalHeading showClose onClose={handleClose}>
        Delete
      </ModalHeading>
      <div className={css.deleteMsg}>
        Are you sure you want to delete the {item.type}{" "}
        <strong>{item.name}</strong> ?
      </div>
      <ModalButtons>
        <Button type="primary" icon="trash" onClick={deleteItem}>
          Delete
        </Button>
        <Button icon="times" onClick={handleClose}>
          Cancel
        </Button>
      </ModalButtons>
    </Modal>
  );
};

export default Delete;
