import React, { useState } from "react";

import fileUtils from "../../utils/fileTypes";
import yt from "youtube-thumbnail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContextMenu, { ContextMenuOption } from "../ContextMenu";
import useContextMenu from "../../hooks/useContextMenu";

import css from "./File.module.scss";
import MoveTo from "../Popups/Move";
import Delete from "../Popups/Delete";

// Helper functions
function openInNewTab(url) {
  window.open(url, "_blank");
}

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

  return (
    <div className={css.file} onClick={() => openInNewTab(url)}>
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

  return (
    <div className={css.file} onClick={() => openInNewTab(url)}>
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

  return (
    <div className={css.file} onClick={() => openInNewTab(url)}>
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

function getFileOption(file) {
  const { url, type } = file;
  switch (type) {
    case "article":
      return (
        <ContextMenuOption
          icon={fileUtils.article.icon}
          option="Read"
          onSelect={() => openInNewTab(url)}
        />
      );
    case "video":
      return (
        <ContextMenuOption
          icon={fileUtils.video.icon}
          option="Watch"
          onSelect={() => openInNewTab(url)}
        />
      );
    case "website":
      return (
        <ContextMenuOption
          icon={fileUtils.website.icon}
          option="Visit"
          onSelect={() => openInNewTab(url)}
        />
      );
    default:
      return <div></div>;
  }
}

const File = ({ file }) => {
  const {
    xCoord,
    yCoord,
    showMenu,
    openContextMenu,
    closeContextMenu,
  } = useContextMenu();
  const [movePopup, openMovePopup] = useState(() => false);
  const [deletePopup, openDeletePopup] = useState(() => false);

  return (
    <>
      <div onContextMenu={openContextMenu}>{getFile(file)}</div>
      {/* Context Menu for files */}
      {showMenu && (
        <ContextMenu
          x={xCoord}
          y={yCoord}
          handleClose={closeContextMenu}
          title={file.name}
        >
          {getFileOption(file)}
          <ContextMenuOption
            icon="cut"
            option="Move"
            onSelect={() => {
              openMovePopup();
            }}
          />
          <ContextMenuOption
            icon="trash"
            option="Delete"
            onSelect={() => {
              openDeletePopup(true);
            }}
          />
        </ContextMenu>
      )}
      {/* Popups */}
      {movePopup && (
        <MoveTo item={file} handleClose={() => openMovePopup(false)} />
      )}
      {deletePopup && (
        <Delete item={file} handleClose={() => openDeletePopup(false)} />
      )}
    </>
  );
};

export default File;
