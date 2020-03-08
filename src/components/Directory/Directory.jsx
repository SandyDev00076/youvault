import React, { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppContext from "../../context/appContext";
import yt from "youtube-thumbnail";

import css from "./Directory.module.scss";

/* A search field to search for videos and folders */
const SearchField = () => {
  return (
    <div className={css.SearchField}>
      <input
        className={css.searchInput}
        placeholder="Search for any video / folder"
      />
    </div>
  );
};

/* A back button to go back in the directory hierarchy */
const BackButton = () => {
  return (
    <button className={css.backbutton}>
      <FontAwesomeIcon icon="arrow-left" />
    </button>
  );
};

/* An item  - video or folder */
const Item = ({ item }) => {
  return <>{item.link ? <Video video={item} /> : <Folder folder={item} />}</>;
};

/* Component for Video */
const Video = ({ video }) => {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    setImageURL(yt(video.link).medium.url);
  }, [video.link]);

  return (
    <button className={css.video} onClick={openVideo}>
      <img className={css.videoImage} src={imageURL} alt="" />
      <div className={css.videoName}>{video.name}</div>
    </button>
  );

  function openVideo() {
    window.open(video.link, "_blank");
  }
};

/* component for Folder */
const Folder = ({ folder }) => {
  return (
    <button className={css.folder}>
      <div className={css.folderName}>{folder.name}</div>
      <div className={css.folderVol}>{folder.videos} videos</div>
    </button>
  );
};

/* Directory Component */
const Directory = () => {
  const { dir } = useContext(AppContext);

  return (
    <section className={css.directory}>
      <div className={css.dirNav}>
        <div className={css.dirPath}>
          <BackButton />
          Home
        </div>
        <SearchField />
      </div>
      {/* Folder Section */}
      {dir.filter(item => item.videos).length > 0 && (
        <section className={css.dirSection}>
          <div className={css.sectionHeading}>Folders</div>
          <div className={css.items}>
            {dir
              .filter(item => item.videos)
              .map((item, index) => (
                <Item key={index} item={item} />
              ))}
          </div>
        </section>
      )}
      {/* Video Section */}
      {dir.filter(item => item.link).length > 0 && (
        <section className={css.dirSection}>
          <div className={css.sectionHeading}>Videos</div>
          <div className={css.items}>
            {dir
              .filter(item => item.link)
              .map((item, index) => (
                <Item key={index} item={item} />
              ))}
          </div>
        </section>
      )}
      {dir.length === 0 && (
        <section className={css.noItems}>
          <div className={css.emptyState}>
            <FontAwesomeIcon className={css.iconForNothing} icon="ghost" />
            <div className={css.msgForNothing}>There's no one here.</div>
            <div className={css.msg2ForNothing}>
              Try adding a video / folder first.
            </div>
          </div>
        </section>
      )}
    </section>
  );
};

export default Directory;
