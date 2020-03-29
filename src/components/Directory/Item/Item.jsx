import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import yt from "youtube-thumbnail";
import { getDirectory } from "../../../api/dirApi";
import { Link } from "react-router-dom";
import useFiles from "../../../hooks/useFiles";

import css from "./Item.module.scss";
import DeleteFolder from "./DeleteFolder";
import DeleteFile from "./DeleteFile/DeleteFile";

const iconMappingTable = {
  article: {
    label: "Article",
    class: "article",
    icon: "pencil-alt"
  },
  video: {
    label: "Video",
    class: "video",
    icon: "video"
  }
};

function getIcon(type) {
  return iconMappingTable[type];
}

/* Folder Content */
const FolderContent = ({ item }) => {
  const { description, id, name } = item;
  const { items: localItems } = useFiles(getDirectory(id));

  const [deletePopup, setDeletePopup] = useState(false);

  let itemCount = {
    article: 0,
    folder: 0,
    video: 0
  };

  localItems.forEach(item => {
    switch (item.type) {
      case "article":
        itemCount.article += 1;
        break;
      case "video":
        itemCount.video += 1;
        break;
      case "folder":
        itemCount.folder += 1;
        break;
      default:
        break;
    }
  });

  return (
    <div className={css.folder}>
      <div className={css.folderName}>{name}</div>
      <div className={css.folderDesc}>
        {description ?? "No description available for the folder."}
      </div>
      <div className={css.folderFooter}>
        <div className={css.btnPanel}>
          <Link to={`/folders/${id}`}>
            <FontAwesomeIcon
              icon="arrow-alt-circle-right"
              className={css.panelBtn}
            />
          </Link>
          <FontAwesomeIcon
            icon="trash"
            className={css.panelBtn}
            onClick={() => setDeletePopup(true)}
          />
        </div>
        <div className={css.folderItemCount}>
          <div>
            {itemCount.video}
            <FontAwesomeIcon icon="video" className={css.folderItemCountIcon} />
          </div>
          <div>
            {itemCount.folder}
            <FontAwesomeIcon
              icon="folder"
              className={css.folderItemCountIcon}
            />
          </div>
          <div>
            {itemCount.article}
            <FontAwesomeIcon
              icon="pencil-alt"
              className={css.folderItemCountIcon}
            />
          </div>
        </div>
      </div>
      {deletePopup && (
        <DeleteFolder
          folderName={name}
          handleClose={() => setDeletePopup(false)}
        />
      )}
    </div>
  );
};

/* Video Content */
const VideoContent = ({ item, onDelete }) => {
  const { name, url, date_created, description } = item;

  function openVideo() {
    window.open(url, "_blank");
  }

  function shareVideo() {
    // TODO: Code to share video
    console.log("Sharing the video");
  }

  return (
    <div className={css.file}>
      <div className={css.itemHeader}>
        <div className={css[getIcon("video").class]}>
          {getIcon("video").label}
          <FontAwesomeIcon
            icon={getIcon("video").icon}
            className={css.itemTypeIcon}
          />
        </div>
        <div className={css.dateCreated}>{date_created}</div>
      </div>
      <div className={css.itemName}>{name}</div>
      <div className={css.videoDetails}>
        <img
          src={yt(url).default.url}
          alt={name}
          className={css.videoThumbnail}
          onClick={openVideo}
        />
        <div className={css.videoDesc}>
          {description ?? "No description available for this video."}
        </div>
      </div>
      <div className={css.btnPanel}>
        <FontAwesomeIcon
          icon="external-link-alt"
          className={css.panelBtn}
          onClick={openVideo}
        />
        <FontAwesomeIcon
          icon="trash"
          className={css.panelBtn}
          onClick={onDelete}
        />
        <FontAwesomeIcon
          icon="share-alt"
          className={css.panelBtn}
          onClick={shareVideo}
        />
      </div>
    </div>
  );
};

/* Article Content */
const ArticleContent = ({ item, onDelete }) => {
  const { name, url, date_created, description } = item;

  function openArticle() {
    window.open(url, "_blank");
  }

  function shareArticle() {
    // TODO: Code to share the article
    console.log("Sharing the article");
  }

  return (
    <div className={css.file}>
      <div className={css.itemHeader}>
        <div className={css[getIcon("article").class]}>
          {getIcon("article").label}
          <FontAwesomeIcon
            icon={getIcon("article").icon}
            className={css.itemTypeIcon}
          />
        </div>
        <div className={css.dateCreated}>{date_created}</div>
      </div>
      <div className={css.itemName}>{name}</div>
      <div className={css.videoDetails}>
        <img
          src={"http://placehold.jp/120x90.png"}
          alt={name}
          className={css.videoThumbnail}
          onClick={openArticle}
        />
        <div className={css.videoDesc}>
          {description ?? "No description available for the article."}
        </div>
      </div>
      <div className={css.btnPanel}>
        <FontAwesomeIcon
          icon="external-link-alt"
          className={css.panelBtn}
          onClick={openArticle}
        />
        <FontAwesomeIcon
          icon="trash"
          className={css.panelBtn}
          onClick={onDelete}
        />
        <FontAwesomeIcon
          icon="share-alt"
          className={css.panelBtn}
          onClick={shareArticle}
        />
      </div>
    </div>
  );
};

const Item = ({ item }) => {
  const { type, name } = item;
  const [deletePopup, setDeletePopup] = useState(false);

  function deleteItem() {
    setDeletePopup(true);
  }

  function getContent() {
    switch (type) {
      case "folder":
        return <FolderContent item={item} onDelete={deleteItem} />;
      case "video":
        return <VideoContent item={item} onDelete={deleteItem} />;
      case "article":
        return <ArticleContent item={item} onDelete={deleteItem} />;
      default:
        return <div></div>;
    }
  }

  return (
    <div tabIndex={0}>
      {getContent()}
      {deletePopup && (
        <DeleteFile
          fileName={name}
          fileType={type}
          handleClose={() => setDeletePopup(false)}
        />
      )}
    </div>
  );
};

export default Item;
