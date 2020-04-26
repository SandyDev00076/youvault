import React, { useState } from "react";

import Input from "../atoms/Input";
import css from "./FolderField.module.scss";
import useSearchQuery from "../../hooks/useSearchQuery";

const FolderField = () => {
  const [query, setQuery] = useState(() => "");
  const { searchResult: folderList } = useSearchQuery({
    query,
    foldersOnly: true,
  });
  console.log(folderList);
  return (
    <>
      <Input
        placeholder="Select a folder"
        value={query}
        onChange={(evt) => setQuery(evt.target.value)}
      />
    </>
  );
};

export default FolderField;
