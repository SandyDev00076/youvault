import React, { useState, useEffect, useContext, Fragment } from "react";

import DefaultLayout from "../../layout/DefaultLayout/DefaultLayout";
import AppContext from "../../context/appContext";
import { Video, Folder } from "../../components/Item";

import css from "./Directory.module.scss";

const Directory = () => {
  const { dirarea } = css;
  const [currentDir, setCurrentDir] = useState("/");
  const { dir } = useContext(AppContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(dir.filter(item => item.parent === currentDir));
  }, [currentDir, dir]);

  return (
    <DefaultLayout>
      <section className={dirarea}>
        {items.map(item => (
          <Fragment key={item.id}>
            {item.link ? <Video video={item} /> : <Folder folder={item} />}
          </Fragment>
        ))}
      </section>
    </DefaultLayout>
  );
};

export default Directory;
