import React, { useState, useRef, useEffect } from "react";

import Input from "../../../atoms/Input";
import useSearchQuery from "../../../../hooks/useSearchQuery";

import css from "./SourceFolder.module.scss";
import Label from "../../../atoms/Label";

const SourceFolder = ({ title, full }) => {
  const [queryString, setQueryString] = useState("");
  const folders = useRef([]);
  const { filteredItems } = useSearchQuery({ text: queryString });

  useEffect(() => {
    folders.current = filteredItems.filter(item => item.type === "folder");
  }, [filteredItems]);

  return (
    <div className={css.sourceFolder}>
      <Label title={title}>
        <Input full={full} onChange={evt => setQueryString(evt.target.value)} />
      </Label>
      {folders.current.length !== 0 && (
        <div className={css.folderDropdown}>
          {folders.current.map((folder, i) => (
            <div className={css.folder} key={i}>
              {folder.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SourceFolder;
