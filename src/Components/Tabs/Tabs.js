import React, { memo, useState } from "react";

import Tab from "./Tab";

const Tabs = (props) => {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       activeTab: this.props.children[0].props.label,
  //     };
  //   }

  const [activeTab, setActiveTab] = useState(props.children[0].props.label);

  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  const { children } = props;

  return (
    <div className="tabs">
      <ol className="tab-list">
        {children.map((child) => {
          const { label } = child.props;

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
            />
          );
        })}
      </ol>
      <div className="tab-content">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

export default memo(Tabs);
