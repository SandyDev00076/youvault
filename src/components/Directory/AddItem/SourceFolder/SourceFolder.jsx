import React, { useState } from "react";

import Input from "../../../atoms/Input";
import useSearchQuery from "../../../../hooks/useSearchQuery";
import Label from "../../../atoms/Label";
import { useMemo } from "react";
import useCurrentFolder from "../../../../hooks/useCurrentFolder";

import css from "./SourceFolder.module.scss";

const SourceFolder = ({ title, full }) => {
  const [queryString, setQueryString] = useState("");
  const { filteredItems } = useSearchQuery({ text: queryString });
  const { folder: currentFolder } = useCurrentFolder();
  const [dropdown, setDropdownVisibility] = useState(false);

  const folderList = useMemo(() => {
    return filteredItems.filter(item => item.type === "folder");
  }, [filteredItems]);

  return (
    <div className={css.sourceFolder}>
      <Label title={title}>
        <Input
          full={full}
          defaultValue={currentFolder.name ?? ""}
          onChange={evt => {
            setDropdownVisibility(true);
            setQueryString(evt.target.value);
          }}
          onBlur={() => setDropdownVisibility(false)}
        />
      </Label>
      {dropdown && (
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
