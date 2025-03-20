import React, { useLayoutEffect, useState } from "react";
import TabBlock from "./components/TabBlock";
import { DesktopNavbar, VerticalCard } from "./components/Components";
export default function App() {
  // State
  const [componentDataList, setComponentDataList] = useState([]);
  const [activePrimComponent, setActivePrimComponent] = useState(0);
  const [hover, setHover] = useState(false);
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
  const updateObject = (activePrimComp, elementToChange, ValueToAdd, index) => {
    const tempEl = { ...elementToChange };
    tempEl.optionValue = ValueToAdd;

    const tempActive = { ...componentDataList[activePrimComp] };
    tempActive.options[index] = tempEl;

    const tempList = [...componentDataList];
    tempList[activePrimComp] = tempActive;
    setComponentDataList([...tempList]);

    console.log(componentDataList[activePrimComp]);
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
    console.log(hover);
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
                color: "black",
              }
            : hover
            ? {
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
                height: "40px",
                width: "89%",
                justifyContent: "space-between",
                border: "2px solid black",
                borderRadius: "6px",
                color: "black",
                backgroundColor: "white",
                padding: "0% 1% 0% 1%",
                boxShadow: "2px 2px 0px 0px rgba(255,255,0,1)",
              }
            : {
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
                height: "40px",
                width: "89%",
                justifyContent: "space-between",
                border: "2px solid white",
                borderRadius: "6px",
                color: "white",
                padding: "0% 1% 0% 1%",
              }
        }
        onClick={() => {
          setActivePrimComponent(i);
        }}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
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
    return (
      <>
        {options.map((el, index) => {
          return (
            <div
              key={el.optionId}
              className="setting"
              style={{
                width: "100%",
                height: "40px",
                display: "flex",
                padding: "10px",
                gap: "12px",
                color: "white",
              }}
            >
              <p>{el.optionKey}</p>
              <input
                type="text"
                style={{ width: "100%" }}
                placeholder={el.optionValue}
                onInput={(e) => {
                  updateObject(
                    activePrimComponent,
                    el,
                    e.currentTarget.value,
                    index
                  );
                }}
              />
            </div>
          );
        })}
      </>
    );
  };
  const canvasArea = (jsx, options, animations) => {
    return (
      <div
        className="canvasArea"
        style={{ width: "100%", height: "100%", padding: "1%" }}
      >
        {jsx(options, animations)}
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
        [
          { optionId: 0, optionKey: "backgroundColor", optionValue: "white" },
          {
            optionId: 0,
            optionKey: "businessName",
            optionValue: "The Jump Digital School",
          },
          { optionId: 0, optionKey: "borderRadius", optionValue: "6px" },
        ],
        []
      )
    );
    array.push(
      setComponentData(
        0,
        "Vertical Card",
        "Web",
        false,
        VerticalCard,
        [
          { optionId: 0, optionKey: "backgroundColor", optionValue: "pink" },
          {
            optionId: 0,
            optionKey: "imageSrc",
            optionValue:
              "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          { optionId: 0, optionKey: "fontFamily", optionValue: "Arial" },
          { optionId: 0, optionKey: "borderRadius", optionValue: "6px" },
        ],
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
                gap: "5px",
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
              canvasArea(
                componentDataList[activePrimComponent].componentJsx,
                componentDataList[activePrimComponent].options,
                componentDataList[activePrimComponent].animations
              )
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
