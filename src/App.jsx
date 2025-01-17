import React, { useState } from "react";
import TabBlock from "./components/TabBlock";
export default function App() {
  // Imports

  // Functions

  // Styles
  const playground = {
    display: "flex",
    height: "100vh",
  };
  const options = {
    height: "100%",
    width: "35%",
    display: "flex",
    flexDirection: "column",
  };
  const componentTree = {
    height: "50%",
    width: "100%",
  };
  const optionsTree = {
    height: "50%",
    width: "100%",
  };

  const content = {
    height: "100%",
    width: "100%",
  };
  const canvas = {
    height: "80%",
    width: "100%",
  };
  const information = {
    height: "20%",
    width: "100%",
  };

  return (
    <div style={playground}>
      <div style={options}>
        <div style={componentTree}>
          <TabBlock _tabs={[{ name: "Component Tree", isActive: true }]} />
        </div>
        <div style={optionsTree}>
          <TabBlock
            _tabs={[
              { name: "Objects", isActive: true },
              { name: "Animations", isActive: false },
            ]}
          />
        </div>
      </div>
      <div style={content}>
        <div style={canvas}>
          <TabBlock
            _tabs={[
              { name: "Primitives", isActive: true },
              { name: "Elements", isActive: false },
              { name: "Physics", isActive: false },
            ]}
          />
        </div>
        <div style={information}>
          <TabBlock _tabs={[{ name: "Information Card", isActive: true }]} />
        </div>
      </div>
    </div>
  );
}
