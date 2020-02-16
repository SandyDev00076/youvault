import React from "react";

import getThumbnail from "youtube-thumbnail";
import css from "./Items.module.scss";

const { tile, thumbnail, itemname } = css;

export const Folder = ({ folder }) => {
  return <div className={tile}>{folder.name}</div>;
};

export const Video = ({ video }) => {
  let videoThumbnail = getThumbnail(video.link).medium.url;
  return (
    <div className={tile}>
      <img src={videoThumbnail} alt="thumbnail" className={thumbnail} />
      <div className={itemname}>{video.name}</div>
    </div>
  );
};
