import React, { useEffect, useState } from "react";
import TabBlock from "./components/TabBlock";
export default function App() {
  // default variables
  const primDefault = {
    name: "",
    settings: { width: "40px", height: "40px", backgroundColor: "pink" },
    animations: { backgroundColor: "blue" },
    obj: () => {
      return <div style={primDefault.settings}></div>;
    },
  };

  // Variables & State
  const [primObjects, setPrimObjects] = useState([primDefault]);
  const [activePrimComponent, setActivePrimComponent] = useState(0);

  // Functions

  const onClickAddNew = () => {
    setPrimObjects([...primObjects, primDefault]);
  };

  // Styles
  const playground = {
    display: "flex",
    height: "95vh",
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

  const row = {
    display: "flex",
    alignItems: "end",
    height: "40px",
  };
  const componentLine = {
    width: "10px",
    height: "100%",
    borderRight: "1px solid black",
  };
  const line = {
    width: "20px",
    height: "40px",
    borderBottom: "1px solid black",
  };

  // Components

  const ComponentLineItem = (i) => {
    return (
      <div style={row}>
        <div style={componentLine}></div>
        <div className="col">
          <div
            style={{
              display: "flex",
              alignItems: "end",
              gap: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              setActivePrimComponent(i);
            }}
          >
            <div style={line}></div>
            <div className="item">ITEM ONE</div>
          </div>
        </div>
      </div>
    );
  };
  const setting = (primObject) => {
    const { settings } = primObject;
    let keys = [];
    let values = [];

    if (settings) {
      keys = Object.keys(settings);
      values = Object.values(settings);
    }

    return (
      <>
        {keys.map((el, index) => {
          return (
            <div
              className="setting"
              style={{
                width: "100%",
                height: "40px",
                display: "flex",
                padding: "10px",
                gap: "12px",
              }}
            >
              <p>{el}</p>
              <input
                type="text"
                style={{ width: "40px" }}
                placeholder={values[index]}
              />
            </div>
          );
        })}
      </>
    );
  };
  const canvasArea = (primObjects) => {
    return (
      <div className="canvasArea" style={{ width: "100%", height: "100%" }}>
        {primObjects.map((el) => {
          return el.obj();
        })}
      </div>
    );
  };

  return (
    <div style={playground}>
      <div style={options}>
        <div className="component-tree" style={componentTree}>
          <TabBlock _tabs={[{ name: "Component Tree", isActive: true }]}>
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "15px",
                justifyContent: "flex-end",
                padding: "8px",
              }}
            >
              <h3 onClick={onClickAddNew}>Add New</h3>
            </div>
            {primObjects.map((el, i) => {
              return ComponentLineItem(i);
            })}
          </TabBlock>
        </div>
        <div style={optionsTree}>
          <TabBlock
            _tabs={[
              { name: "Settings", isActive: true },
              { name: "Animations", isActive: false },
            ]}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                padding: "16px",
              }}
            >
              {setting(primObjects[activePrimComponent])}
            </div>
          </TabBlock>
        </div>
      </div>
      <div style={content}>
        <div style={canvas}>
          <TabBlock
            _tabs={[
              { name: "Primitives", isActive: true },
              // { name: "Elements", isActive: false },
              // { name: "Physics", isActive: false },
            ]}
          >
            {canvasArea(primObjects)}
          </TabBlock>
        </div>
        <div style={information}>
          <TabBlock _tabs={[{ name: "Information Card", isActive: true }]} />
        </div>
      </div>
    </div>
  );
}
