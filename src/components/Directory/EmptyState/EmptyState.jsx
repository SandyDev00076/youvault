import React from "react";

import css from "./EmptyState.module.scss";

const EmptyState = () => {
  return (
    <div className={css.emptyUI}>
      <div className={css.line1}>Nothing Here!</div>
      <div className={css.line2}>
        {/* TODO: Open a modal for adding a file/folder here. */}
        Add <span className={css.add}>a file</span> or{" "}
        <span className={css.add}>a folder</span> here.
      </div>
    </div>
  );
};

export default EmptyState;
