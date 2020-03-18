import React, { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppContext from "../../context/appContext";
import yt from "youtube-thumbnail";
import { getDirectory } from "../../api/dirApi";

import css from "./Directory.module.scss";
import Item from "./Item";

/* Directory Component */
const Directory = () => {
  const [dirList, setDirList] = useState([]);

  useEffect(() => {
    getDirectory().then(data => setDirList(data));
  }, []);

  return (
    <section className={css.directory}>
      <section className={css.actionBar}>
        <div className={css.path}></div>
      </section>
      <section className={css.dirSection}>
        {dirList.map(item => (
          <Item item={item} key={item.id} />
        ))}
      </section>
    </section>
  );
};

export default Directory;
