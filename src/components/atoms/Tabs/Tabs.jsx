import React, { useMemo, useState } from "react";

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

  const [activeTab, setActiveTab] = useState(() => {
    tabs.forEach((tab, i) => {
      if (tab.props.active) return i;
    });
    return 0;
  });

  return (
    <div className={css.tabsContainer}>
      {tabTitles.map((tab, i) => (
        <button
          className={`${css.tabBtn} ${activeTab === i && css.activeTabBtn}`}
          onClick={() => setActiveTab(i)}
        >
          {tab}
        </button>
      ))}
      {tabs[activeTab]}
    </div>
  );
};

export const Tab = ({ children }) => {
  return <div className={css.tabContent}>{children}</div>;
};

export default Tabs;
