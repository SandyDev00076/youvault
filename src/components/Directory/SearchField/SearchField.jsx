import React from "react";
import { useState } from "react";
import useSearchQuery from "../../../hooks/useSearchQuery";
import { Link } from "react-router-dom";

import css from "./SearchField.module.scss";

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
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchField;
