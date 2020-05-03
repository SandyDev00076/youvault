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
      <div className={css.mainRow}>
        <div className={css.folderLocation}>
          <div className={css.folderActions}>
            <button
              className={css.goUp}
              disabled={history.length <= 1}
              onClick={() => {
                history.goBack();
              }}
            >
              <FontAwesomeIcon icon="arrow-left" />
            </button>
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
              <FontAwesomeIcon icon="arrow-up" />
            </button>
          </div>
          <div className={css.path}>
            {path.map((folder) => (
              <span key={folder.id} className={css.parentLine}>
                <Link
                  to={`/folders/${folder.id !== "/" ? folder.id : ""}`}
                  className={css.parents}
                >
                  {folder.name}
                </Link>{" "}
                /
              </span>
            ))}
            <span className={css.folderName}>{folderName}</span>
          </div>
        </div>
        <SearchField />
      </div>
      <div className={css.about}>
        {description !== "--" && (
          <div className={css.folderDesc}>
            <strong className={css.aboutText}>
              <FontAwesomeIcon icon="info-circle" className={css.infoIcon} />
              About :{" "}
            </strong>{" "}
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
