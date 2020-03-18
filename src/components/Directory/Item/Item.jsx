import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import css from "./Item.module.scss";

const iconMappingTable = {
  article: {
    label: "Article",
    class: "article",
    icon: "pencil-alt"
  },
  folder: {
    label: "Folder",
    class: "folder",
    icon: "folder"
  },
  video: {
    label: "Video",
    class: "video",
    icon: "video"
  }
};

const Item = ({ item }) => {
  function getIcon() {
    return iconMappingTable[item.type];
  }

  return (
    <div className={css.item} tabIndex={0}>
      <div className={css.itemHeader}>
        <div className={css.itemType}>
          {getIcon().label}
          <FontAwesomeIcon
            icon={getIcon().icon}
            className={css[getIcon().class]}
          />
        </div>
        <div className={css.dateCreated}>{item.date_created}</div>
      </div>
      <div className={css.itemName}>{item.name}</div>
    </div>
  );
};

export default Item;
