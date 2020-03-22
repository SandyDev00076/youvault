import React from "react";
import { Link } from "react-router-dom";

import css from "./FolderPath.module.scss";

/* Component for Folder path */
const FolderPath = ({ fullPath }) => (
  <div className={css.path}>
    {fullPath.length !== 0 && (
      <>
        {fullPath.map((path, index) => (
          <span key={path.id}>
            {index !== fullPath.length - 1 ? (
              <span className={css.parentFolder}>
                <Link to={path.id !== "/" ? `/folders/${path.id}` : "/folders"}>
                  {path.name}
                </Link>
                /
              </span>
            ) : (
              <span className={css.activeFolder}>{path.name}</span>
            )}
          </span>
        ))}
      </>
    )}
  </div>
);

export default FolderPath;
