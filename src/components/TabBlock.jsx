import React, { useState } from "react";

export default function TabBlock({
  _tabs = [{ name: "Component Tree", isActive: true }],
  backgroundColor = "white",
  border = "1px solid black",
  fontColor = "black",
  children,
}) {
  // Styles
  const tabBlock = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
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
    backgroundColor: backgroundColor,
    width: "fit-content",
    borderTopRightRadius: "8px",
    borderTopLeftRadius: "8px",
    padding: "0 6px 0 6px",
    minWidth: "120px",
    cursor: "pointer",
    border: border,
    color: fontColor,
  };
  const tabContent = {
    height: "100%",
    width: "100%",
    backgroundColor: backgroundColor,
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",
    borderBottomLeftRadius: "8px",
    border: border,
  };

  return (
    <div style={tabBlock}>
      <div style={clickableTabs}>
        {_tabs.map((t, i) => {
          return <div style={tab}>{t.name}</div>;
        })}
      </div>
      <div style={tabContent}>{children}</div>
    </div>
  );
}
