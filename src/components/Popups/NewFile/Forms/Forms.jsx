import React from "react";

import Label from "../../../atoms/Label";
import Input from "../../../atoms/Input";
import TextArea from "../../../atoms/TextArea";
import { ModalButtons } from "../../../atoms/Modal";
import Button from "../../../atoms/Button";

import css from "./Forms.module.scss";

const VideoForm = ({ onClose }) => {
  return (
    <form>
      <Label name="Name">
        <Input />
      </Label>
      <Label name="Youtube URL">
        <Input />
      </Label>
      <Label name="Tell us about this video">
        <TextArea />
      </Label>
      <ModalButtons>
        <Button type="primary">Add Video</Button>
        <Button onClick={onClose} icon="times">
          Cancel
        </Button>
      </ModalButtons>
    </form>
  );
};

const ArticleForm = ({ onClose }) => {
  return (
    <form>
      <Label name="Name">
        <Input />
      </Label>
      <Label name="Article Link">
        <Input />
      </Label>
      <Label name="What is it about?">
        <TextArea />
      </Label>
      <ModalButtons>
        <Button type="primary">Add Article</Button>
        <Button onClick={onClose} icon="times">
          Cancel
        </Button>
      </ModalButtons>
    </form>
  );
};

const WebsiteForm = ({ onClose }) => {
  return (
    <form>
      <Label name="Name">
        <Input />
      </Label>
      <Label name="Website Link">
        <Input />
      </Label>
      <Label name="What does it have?">
        <TextArea />
      </Label>
      <ModalButtons>
        <Button type="primary">Add Website</Button>
        <Button onClick={onClose} icon="times">
          Cancel
        </Button>
      </ModalButtons>
    </form>
  );
};

const Forms = ({ fileType = "video", onClose }) => {
  switch (fileType) {
    case "video":
      return <VideoForm onClose={onClose} />;
    case "article":
      return <ArticleForm onClose={onClose} />;
    case "website":
      return <WebsiteForm onClose={onClose} />;
    default:
      return <VideoForm onClose={onClose} />;
  }
};

export default Forms;
