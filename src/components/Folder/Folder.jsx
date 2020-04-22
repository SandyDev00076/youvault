import React from "react";

import Link from "../atoms/Link";

import css from "./Folder.module.scss";

const Folder = ({ folder }) => {
  return (
    <Link to={`/folders/${folder.id}`} className={css.folder}>
      {folder.name}
    </Link>
  );
};

export default Folder;
