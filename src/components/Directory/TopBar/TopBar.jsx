import React from "react";

import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "../../atoms/Link";
import SearchField from "../../SearchField";

import css from "./TopBar.module.scss";

const TopBar = ({ folderName, path, description }) => {
  const history = useHistory();
  return (
    <div className={css.topBar}>
      <div className={css.folderDetails}>
        <div className={css.path}>
          <button
            className={css.goUp}
            disabled={path.length === 0}
            onClick={() => {
              history.push(
                `/folders/${
                  path[path.length - 1].id !== "/"
                    ? path[path.length - 1].id
                    : ""
                }`
              );
            }}
          >
            <FontAwesomeIcon icon="arrow-left" />
          </button>
          {path.map((folder) => (
            <span key={folder.id} className={css.parents}>
              <Link to={`/folders/${folder.id !== "/" ? folder.id : ""}`}>
                {folder.name}
              </Link>{" "}
              /
            </span>
          ))}
          <span className={css.folderName}>{folderName}</span>
        </div>
        {description !== "--" && (
          <div className={css.folderDesc}>
            <strong>About</strong>: {description}
          </div>
        )}
      </div>
      <SearchField />
    </div>
  );
};

export default TopBar;
