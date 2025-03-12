function DesktopNavbar() {
  const navStyles = {
    height: "50px",
    width: "100%",
    backgroundColor: "white",
    border: "2px solid black",
    padding: "0.5%",
    borderRadius: "6px",
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
      <h3>The Jump Digital School</h3>
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

function MobileNavbar() {
  return (
    <nav>
      <h4>BUSINESS NAME</h4>
      <div>
        <i>Link One</i>
        <i>Link Two</i>
        <i>Link Three</i>
        <i>Link Four</i>
        <i>Link Five</i>
      </div>
      <button>Click Me!</button>
    </nav>
  );
}

function VerticalCard() {}

export { DesktopNavbar };
