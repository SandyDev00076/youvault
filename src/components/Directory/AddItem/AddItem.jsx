import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../../atoms/Modal";
import Tabs, { Tab } from "../../atoms/Tabs";
import Label from "../../atoms/Label";
import Input from "../../atoms/Input";
import Textarea from "../../atoms/Textarea";
import Button from "../../atoms/Button";

import css from "./AddItem.module.scss";
import SourceFolder from "./SourceFolder";

const AddItemDialogBox = ({ handleClose }) => {
  return (
    <Modal title="Add an Item" closeBtn onClose={handleClose}>
      <Tabs>
        <Tab title="Folder" labelIcon="folder" active>
          <SourceFolder full title="Where" />
          <Label title="Name">
            <Input full />
          </Label>
          <Label title="Description">
            <Textarea full />
          </Label>
          <div className="btnPanel">
            <Button type="primary">Add</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </div>
        </Tab>
        <Tab title="File" labelIcon="photo-video">
          <SourceFolder full title="Where" />
          <Label title="Name">
            <Input full />
          </Label>
          <div className="btnPanel">
            <Button type="primary">Add</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </div>
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
