import React, { useLayoutEffect, useState } from "react";
import TabBlock from "./components/TabBlock";
import { DesktopNavbar } from "./components/Components";
export default function App() {
  // default variables
  const primDefault = {
    name: "",
    settings: {
      top: "50px",
      left: "50px",
      width: "40px",
      height: "40px",
      backgroundColor: "pink",
      position: "relative",
      borderRadius: "0px",
    },
    animations: { backgroundColor: "blue" },
    obj: () => {
      return <div style={primDefault.settings}></div>;
    },
  };
  // State
  const [componentDataList, setComponentDataList] = useState([]);
  const [activePrimComponent, setActivePrimComponent] = useState(0);

  // Variables

  // Functions
  const setComponentData = (
    id,
    name,
    type,
    active,
    jsx,
    options = [
      {
        optionId: "",
        optionKey: "",
        optionValue: "",
      },
    ],
    animations = [
      {
        animationId: "",
        animationData: [{ animationDataKey: "" }],
      },
    ]
  ) => {
    return {
      componentId: id,
      componentName: name,
      componentType: type,
      componentActive: active,
      componentJsx: jsx,
      options: options,
      animations: animations,
    };
  };

  // Styles
  const playground = {
    display: "flex",
    height: "100vh",
    padding: "1%",
    gap: "1%",
  };
  const options = {
    height: "100%",
    width: "25%",
    display: "flex",
    flexDirection: "column",
    gap: "1%",
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
    display: "flex",
    flexDirection: "column",
    gap: "1%",
  };
  const canvas = {
    height: "80%",
    width: "100%",
  };
  const information = {
    height: "20%",
    width: "100%",
  };
  const activeRow = {
    backgroundColor: "#FFFF00",
    border: "2px solid black",
    borderRadius: "6px",
  };

  // Components
  const ComponentLineItem = (el, i) => {
    const itemStyles = {
      fontSize: "1em",
    };

    return (
      <div
        style={
          activePrimComponent === i
            ? {
                ...activeRow,
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
                height: "40px",
                width: "90%",
                justifyContent: "space-between",
                padding: "0% 1% 0% 1%",
              }
            : {
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
                height: "40px",
                width: "90%",
                justifyContent: "space-between",
              }
        }
        onClick={() => {
          setActivePrimComponent(i);
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img />
          <div className="item" style={itemStyles}>
            {el.componentName}
          </div>
        </div>
        <div className="item" style={itemStyles}>
          {">"}
        </div>
      </div>
    );
  };
  const settings = (options) => {
    console.log(options);

    return (
      <>
        {options.map((el, index) => {
          if (el !== "position") {
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
                  onInput={(e) => {
                    updateObject(
                      activePrimComponent,
                      el,
                      e.currentTarget.value
                    );
                  }}
                />
              </div>
            );
          }
        })}
      </>
    );
  };
  const canvasArea = (jsx) => {
    return (
      <div
        className="canvasArea"
        style={{ width: "100%", height: "100%", padding: "1%" }}
      >
        {jsx()}
      </div>
    );
  };

  useLayoutEffect(() => {
    let array = [];
    array.push(
      setComponentData(
        0,
        "Desktop Nav Bar",
        "Web",
        false,
        DesktopNavbar,
        [],
        []
      )
    );
    setComponentDataList(array);
  }, []);

  return (
    <div style={playground}>
      <div style={options}>
        <div className="component-tree" style={componentTree}>
          <TabBlock
            _tabs={[{ name: "Components", isActive: true }]}
            backgroundColor="rgb(30, 30, 30)"
            border="1px solid white"
            fontColor="white"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "2%",
              }}
            >
              {componentDataList.map((el, i) => {
                return ComponentLineItem(el, i);
              })}
            </div>
          </TabBlock>
        </div>
        <div style={optionsTree}>
          <TabBlock
            _tabs={[{ name: "Options", isActive: true }]}
            backgroundColor="rgb(30, 30, 30)"
            border="1px solid white"
            fontColor="white"
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
              {componentDataList.length > 0 ? (
                settings(componentDataList[activePrimComponent].options)
              ) : (
                <></>
              )}
            </div>
          </TabBlock>
        </div>
      </div>
      <div style={content}>
        <div style={canvas}>
          <TabBlock _tabs={[{ name: "Playground", isActive: true }]}>
            {componentDataList.length > 0 ? (
              canvasArea(componentDataList[activePrimComponent].componentJsx)
            ) : (
              <></>
            )}
          </TabBlock>
        </div>
        <div style={information}>
          <TabBlock
            _tabs={[{ name: "Information Card", isActive: true }]}
            backgroundColor="rgb(30, 30, 30)"
            border="1px solid white"
            fontColor="white"
          />
        </div>
      </div>
    </div>
  );
}
