import React, { useState } from "react";

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
        <div style={componentTree}></div>
        <div style={optionsTree}></div>
      </div>
      <div style={content}>
        <div style={canvas}></div>
        <div style={information}></div>
      </div>
    </div>
  );
}
