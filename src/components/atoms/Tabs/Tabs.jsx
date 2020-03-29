import React, { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import css from "./Tabs.module.scss";

const Tabs = ({ children }) => {
  const tabs = useMemo(() => {
    // get array of children
    const tabChildren = React.Children.toArray(children);
    const innerTabs = [];
    tabChildren.forEach(tab => {
      if (React.isValidElement(tab)) innerTabs.push(tab);
    });
    return innerTabs;
  }, [children]);

  const tabTitles = useMemo(() => tabs.map(tab => tab.props.title), [tabs]);
  const tabsIcons = useMemo(() => tabs.map(tab => tab.props.labelIcon), [tabs]);

  const [activeTab, setActiveTab] = useState(() => {
    tabs.forEach((tab, i) => {
      if (tab.props.active) return i;
    });
    return 0;
  });

  return (
    <>
      <div className={css.tabsContainer}>
        {tabTitles.map((tab, i) => (
          <button
            key={i}
            className={`${css.tabBtn} ${activeTab === i && css.activeTabBtn}`}
            onClick={() => setActiveTab(i)}
          >
            {tabsIcons[i] !== null && (
              <FontAwesomeIcon className={css.tabIcon} icon={tabsIcons[i]} />
            )}
            {tab}
          </button>
        ))}
      </div>
      {tabs[activeTab]}
    </>
  );
};

export const Tab = ({ children }) => {
  return <div className={css.tabContent}>{children}</div>;
};

export default Tabs;
