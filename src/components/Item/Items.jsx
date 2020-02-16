import React from "react";

import css from "./Items.module.scss";

const { tile } = css;

export const Folder = ({ folder }) => {
  return <div className={tile}>{folder.name}</div>;
};

export const Video = ({ video }) => {
  return <div className={tile}>{video.name}</div>;
};
