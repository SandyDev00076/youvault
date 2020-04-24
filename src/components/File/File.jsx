import React, { useState } from "react";

import fileUtils from "../../utils/fileTypes";
import yt from "youtube-thumbnail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import css from "./File.module.scss";
import ContextMenu from "../ContextMenu";

const FileHeader = ({ type }) => {
  return (
    <div className={css.fileType}>
      <FontAwesomeIcon
        icon={fileUtils[type].icon}
        className={css.fileTypeIcon}
      />
      <span className={css.fileTypeName}>{type}</span>
    </div>
  );
};

const Video = ({ file }) => {
  const { url, name, description } = file;

  function openVideo() {
    window.open(url, "_blank");
  }

  return (
    <div className={css.file} onClick={openVideo}>
      <img src={yt(url).default.url} alt={name} className={css.fileImage} />
      <div className={css.fileDetails}>
        <FileHeader type={"video"} />
        <div className={css.fileName}>{name}</div>
        <div className={css.fileDesc}>{description ?? ""}</div>
      </div>
    </div>
  );
};

const Article = ({ file }) => {
  const { url, name, description } = file;

  function openArticle() {
    window.open(url, "_blank");
  }

  return (
    <div className={css.file} onClick={openArticle}>
      <img
        src={"https://dummyimage.com/120x90/949494/fff"}
        alt={name}
        className={css.fileImage}
      />
      <div className={css.fileDetails}>
        <FileHeader type={"article"} />
        <div className={css.fileName}>{name}</div>
        <div className={css.fileDesc}>{description ?? ""}</div>
      </div>
    </div>
  );
};

const Website = ({ file }) => {
  const { url, name, description } = file;

  function openWebsite() {
    window.open(url, "_blank");
  }

  return (
    <div className={css.file} onClick={openWebsite}>
      <img
        src={"https://dummyimage.com/120x90/949494/fff"}
        alt={name}
        className={css.fileImage}
      />
      <div className={css.fileDetails}>
        <FileHeader type={"website"} />
        <div className={css.fileName}>{name}</div>
        <div className={css.fileDesc}>{description ?? ""}</div>
      </div>
    </div>
  );
};

function getFile(file) {
  switch (file.type) {
    case "video":
      return <Video file={file} />;
    case "article":
      return <Article file={file} />;
    case "website":
      return <Website file={file} />;
    default:
      return <div></div>;
  }
}

const File = ({ file }) => {
  const [contextMenu, setContextMenu] = useState(() => null);

  function openContextMenu(evt) {
    evt.preventDefault();
    setContextMenu({
      x: evt.clientX,
      y: evt.clientY,
    });
  }

  function closeContextMenu() {
    setContextMenu(null);
  }

  return (
    <div onContextMenu={openContextMenu}>
      {getFile(file)}
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          handleClose={closeContextMenu}
          title={file.name}
        ></ContextMenu>
      )}
    </div>
  );
};

export default File;
