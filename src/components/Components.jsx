import CardImg from "../assets/card-photo.jpg";

function DesktopNavbar(options, animations) {
  const stylesToAdd = {};

  options.forEach((el) => {
    stylesToAdd[el.optionKey] = el.optionValue;
  });
  const navStyles = {
    height: "50px",
    width: "100%",
    backgroundColor: stylesToAdd.backgroundColor,
    border: "2px solid black",
    padding: "0.5%",
    borderRadius: stylesToAdd.borderRadius,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const linkBlockStyles = {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "2%",
  };
  const buttonStyles = {
    width: "150px",
    height: "40px",
    backgroundColor: "black",
    border: "2px solid white",
    color: "white",
    outline: "none",
    borderRadius: "6px",
  };

  return (
    <nav style={navStyles}>
      <h3>{stylesToAdd.businessName}</h3>
      <div style={linkBlockStyles}>
        <i>Link One</i>
        <i>Link Two</i>
        <i>Link Three</i>
        <i>Link Four</i>
        <i>Link Five</i>
        <button style={buttonStyles}>Click Me!</button>
      </div>
    </nav>
  );
}

function VerticalCard(options, animations) {
  const stylesToAdd = {};

  options.forEach((el) => {
    stylesToAdd[el.optionKey] = el.optionValue;
  });

  const vertCardStyle = {
    height: "50%",
    width: "20%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: stylesToAdd.backgroundColor,
    padding: "0.5%",
    borderRadius: stylesToAdd.borderRadius,
    border: "2px solid grey",
    gap: "2%",
  };

  const container = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "5px",
    fontFamily: stylesToAdd.fontFamily,
  };

  return (
    <div style={vertCardStyle}>
      <img
        style={{
          width: "100%",
          height: "100%",
          borderRadius: stylesToAdd.borderRadius,
        }}
        src={stylesToAdd.imageSrc}
        alt=""
      />
      <div style={container}>
        <h4>This is a card</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
          cupiditate enim, nihil iste officiis ratione magni animi officia,
          accusantium expedita suscipit!
        </p>
        <button
          style={{
            backgroundColor: "white",
            width: "50%",
            outline: "none",
            border: "none",
            height: "25px",
            borderRadius: "3px",
          }}
        >
          Click Me!
        </button>
      </div>
    </div>
  );
}

export { DesktopNavbar, VerticalCard };
