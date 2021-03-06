import React, { useState } from "react";

import useSearchQuery from "../../hooks/useSearchQuery";
import Link from "../atoms/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fileTypeUtils from "../../utils/fileTypes";

import css from "./SearchField.module.scss";
import Backdrop from "../Backdrop";

const SearchField = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const { searchResult } = useSearchQuery({ query: searchQuery });

  function clearField() {
    setDropdownVisibility(false);
    setSearchQuery("");
  }

  return (
    <div className={css.searchWrapper}>
      <input
        className={css.searchField}
        placeholder="Search for files / folders"
        value={searchQuery}
        onChange={(evt) => setSearchQuery(evt.target.value)}
        onFocus={() => setDropdownVisibility(true)}
      />
      {searchQuery && (
        <FontAwesomeIcon
          icon="times"
          className={css.closeBtn}
          onClick={clearField}
        />
      )}
      {dropdownVisibility && searchQuery && (
        <>
          <Backdrop onBackdropClick={() => setDropdownVisibility(false)} />
          <div className={css.searchDropdown}>
            {searchResult.map((item, index) => (
              <Link
                key={index}
                to={`/folders/${item.idToGoto !== "/" ? item.idToGoto : ""}`}
                className={css.searchDropdownItem}
                onClick={clearField}
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
        </>
      )}
    </div>
  );
};

export default SearchField;
