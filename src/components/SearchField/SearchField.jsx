import React, { useState } from "react";

import css from "./SearchField.module.scss";
import useSearchQuery from "../../hooks/useSearchQuery";
import Link from "../atoms/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fileTypeUtils from "../../utils/fileTypes";

const SearchField = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { searchResult } = useSearchQuery({ query: searchQuery });

  return (
    <div className={css.searchWrapper}>
      <input
        className={css.searchField}
        placeholder="Search for files / folders"
        value={searchQuery}
        onChange={(evt) => setSearchQuery(evt.target.value)}
      />
      {searchQuery && (
        <div className={css.searchDropdown}>
          {searchResult.map((item, index) => (
            <Link
              key={index}
              to={`/folders/${item.idToGoto !== "/" ? item.idToGoto : ""}`}
              className={css.searchDropdownItem}
              onClick={() => setSearchQuery("")}
            >
              <div className={css.itemDetails}>
                <FontAwesomeIcon
                  icon={fileTypeUtils[item.type].icon}
                  className={css.itemTypeIcon}
                />
                <div className={css.itemType}>{item.type}</div>
              </div>
              <div className={css.itemName}>{item.name}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchField;
