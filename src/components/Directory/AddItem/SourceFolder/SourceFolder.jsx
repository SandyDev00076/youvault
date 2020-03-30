import React, { useState } from "react";

import Input from "../../../atoms/Input";
import useSearchQuery from "../../../../hooks/useSearchQuery";
import Label from "../../../atoms/Label";
import { useMemo } from "react";

import css from "./SourceFolder.module.scss";

const SourceFolder = ({ title, full }) => {
  const [queryString, setQueryString] = useState("");
  const { filteredItems } = useSearchQuery({ text: queryString });

  const folderList = useMemo(() => {
    return filteredItems.filter(item => item.type === "folder");
  }, [filteredItems]);

  return (
    <div className={css.sourceFolder}>
      <Label title={title}>
        <Input full={full} onChange={evt => setQueryString(evt.target.value)} />
      </Label>
      {queryString.length !== 0 && (
        <div className={css.folderDropdown}>
          {folderList.map((folder, i) => (
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
