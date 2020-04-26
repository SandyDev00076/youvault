import React, { useState } from "react";

import Input from "../atoms/Input";
import useSearchQuery from "../../hooks/useSearchQuery";

import css from "./FolderField.module.scss";

const FolderField = ({ onFolderSelect }) => {
  const [query, setQuery] = useState(() => "");
  const [selected, setSelected] = useState(() => false);
  const { searchResult: folderList } = useSearchQuery({
    query,
    foldersOnly: true,
  });
  return (
    <div className={css.folderField}>
      <Input
        placeholder="Select a folder"
        value={query}
        onChange={(evt) => {
          if (selected) setSelected(false);
          setQuery(evt.target.value);
        }}
      />
      {query && !selected && (
        <div className={css.dropdown}>
          {folderList.map((folder) => (
            <div
              className={css.dropdownItem}
              key={folder.id}
              onClick={() => {
                setSelected(true);
                setQuery(folder.name);
                onFolderSelect(folder);
              }}
            >
              <div className={css.folderName}>{folder.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FolderField;
