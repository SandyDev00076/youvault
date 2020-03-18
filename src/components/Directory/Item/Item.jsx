import React from "react";

import css from "./Item.module.scss";

const Item = ({ item }) => {
  return (
    <div className={css.item} tabIndex={0}>
      <div className={css.itemHeader}>
        <div className={css.itemType}>{item.type}</div>
        <div className={css.dateCreated}>{item.date_created}</div>
      </div>
      <div className={css.itemName}>{item.name}</div>
    </div>
  );
};

export default Item;
