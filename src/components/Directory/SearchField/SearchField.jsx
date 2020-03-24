import React from "react";
import { useState } from "react";
import useSearchQuery from "../../../hooks/useSearchQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import css from "./SearchField.module.scss";

const iconMappingTable = {
  article: "pencil-alt",
  video: "video",
  folder: "folder"
};

const SearchField = ({ placeholder }) => {
  const [queryString, setQueryString] = useState("");
  const { filteredItems } = useSearchQuery({ text: queryString });

  return (
    <div className={css.searchField}>
      <input
        className={css.searchInput}
        placeholder={placeholder}
        onChange={evt => setQueryString(evt.target.value)}
      />
      {filteredItems.length !== 0 && (
        <div className={css.searchDropdown}>
          {filteredItems.map(item => (
            <Link
              key={item.id}
              to={`/folders/${
                item.type === "folder"
                  ? item.id
                  : item.parent === "/"
                  ? ""
                  : item.parent
              }`}
              className={css.searchDropdownItem}
            >
              <div>
                <div className={css.itemName}>{item.name}</div>
                <div className={css.itemParentName}>{item.parentName}</div>
              </div>
              <FontAwesomeIcon
                icon={iconMappingTable[item.type]}
                className={css.itemIcon}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchField;
