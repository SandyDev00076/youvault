import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../../atoms/Modal";
import Tabs, { Tab } from "../../atoms/Tabs";
import Label from "../../atoms/Label";
import SearchField from "../SearchField";

import css from "./AddItem.module.scss";

const AddItemDialogBox = ({ handleClose }) => {
  return (
    <Modal title="Add an Item" closeBtn onClose={handleClose}>
      <Tabs>
        <Tab title="Folder" labelIcon="folder" active></Tab>
        <Tab title="File" labelIcon="photo-video">
          File
        </Tab>
      </Tabs>
    </Modal>
  );
};

const AddItem = () => {
  const [addItemPopUp, setAddItemPopUp] = useState(false);
  return (
    <>
      <div className={css.addItemBtn} onClick={() => setAddItemPopUp(true)}>
        <FontAwesomeIcon icon="plus" className={css.addItemIcon} />
        <span className={css.addItemText}>Add a File / Folder</span>
      </div>
      {addItemPopUp && (
        <AddItemDialogBox handleClose={() => setAddItemPopUp(false)} />
      )}
    </>
  );
};

export default AddItem;
