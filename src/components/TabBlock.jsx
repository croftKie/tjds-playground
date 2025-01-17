import React, { useState } from "react";

export default function TabBlock({
  _tabs = [{ name: "Component Tree", isActive: true }],
}) {
  // Variables
  const [allTabs, setAllTabs] = useState(_tabs);

  // Functions
  const tabClick = (i, _tabs) => {
    const tempTabs = _tabs.map((e) => {
      e.isActive = false;
      return e;
    });
    tempTabs[i].isActive = true;
    setAllTabs(tempTabs);
  };

  // Styles
  const tabBlock = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "8px",
  };
  const clickableTabs = {
    height: "50px",
    width: "100%",
    display: "flex",
    justifyContent: "start",
    gap: "1%",
  };
  const tab = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(30, 30, 30)",
    width: "fit-content",
    color: "white",
    minWidth: "150px",
    cursor: "pointer",
  };
  const tabActive = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "fit-content",
    borderTopRightRadius: "8px",
    borderTopLeftRadius: "8px",
    padding: "0 6px 0 6px",
    minWidth: "120px",
    cursor: "pointer",
  };
  const tabContent = {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",
    borderBottomLeftRadius: "8px",
  };

  return (
    <div style={tabBlock}>
      <div style={clickableTabs}>
        {_tabs.map((t, i) => {
          return (
            <div
              style={t.isActive ? tabActive : tab}
              onClick={() => tabClick(i, allTabs)}
            >
              {t.name}
            </div>
          );
        })}
      </div>
      <div style={tabContent}></div>
    </div>
  );
}
