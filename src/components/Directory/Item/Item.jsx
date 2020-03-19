import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import yt from "youtube-thumbnail";

import css from "./Item.module.scss";

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

function deleteItem() {
  // TODO: Code for deleting the item
  console.log("deleting the item");
}

/* Folder Content */
const FolderContent = ({ item }) => {
  const { description, items, name } = item;

  let itemCount = {
    article: 0,
    folder: 0,
    video: 0
  };

  items.forEach(item => {
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

  function openFolder() {
    // TODO: Code for opening the folder
    console.log("opening the folder");
  }

  return (
    <>
      <div className={css.folderDesc}>
        {description ?? "No description available for the folder."}
      </div>
      <div className={css.folderFooter}>
        <div className={css.btnPanel}>
          <FontAwesomeIcon
            icon="arrow-alt-circle-right"
            className={css.panelBtn}
            onClick={openFolder}
          />
          <FontAwesomeIcon
            icon="trash"
            className={css.panelBtn}
            onClick={deleteItem}
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
    </>
  );
};

/* Video Content */
const VideoContent = ({ item }) => {
  const { name, url, description } = item;

  function openVideo() {
    window.open(url, "_blank");
  }

  function shareVideo() {
    // TODO: Code to share video
    console.log("Sharing the video");
  }

  return (
    <>
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
          onClick={deleteItem}
        />
        <FontAwesomeIcon
          icon="share-alt"
          className={css.panelBtn}
          onClick={shareVideo}
        />
      </div>
    </>
  );
};

/* Article Content */
const ArticleContent = ({ item }) => {
  const { name, url, description } = item;

  function openArticle() {
    window.open(url, "_blank");
  }

  function shareArticle() {
    // TODO: Code to share the article
    console.log("Sharing the article");
  }

  return (
    <>
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
          onClick={deleteItem}
        />
        <FontAwesomeIcon
          icon="share-alt"
          className={css.panelBtn}
          onClick={shareArticle}
        />
      </div>
    </>
  );
};

const Item = ({ item }) => {
  const { type, date_created, name } = item;

  function getIcon() {
    return iconMappingTable[type];
  }

  function getContent() {
    switch (type) {
      case "folder":
        return <FolderContent item={item} />;
      case "video":
        return <VideoContent item={item} />;
      case "article":
        return <ArticleContent item={item} />;
      default:
        return <div></div>;
    }
  }

  return (
    <div className={css.item} tabIndex={0}>
      {type !== "folder" && (
        <div className={css.itemHeader}>
          <div className={css[getIcon().class]}>
            {getIcon().label}
            <FontAwesomeIcon
              icon={getIcon().icon}
              className={css.itemTypeIcon}
            />
          </div>
          <div className={css.dateCreated}>{date_created}</div>
        </div>
      )}
      <div className={css.itemName}>{name}</div>
      {getContent()}
    </div>
  );
};

export default Item;
