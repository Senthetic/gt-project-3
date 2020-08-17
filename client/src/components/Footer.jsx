import React from "react";

const Footer = () => {
  const footerStyle = {
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
  backgroundColor: "#F5CB5C",
  color: "white",
  textAlign: "center"
  };
  return (
    <footer className="container">
      <nav
        className="navbar fixed-bottom stickyFooter navbar-expand-lg"
        style={footerStyle}
      >
        <div className="navbar-brand">
          © 2020 Brian Cook, Jimmy Kazadi, Andrew Collier
        </div>
      </nav>
    </footer>
  );
};
export default Footer;
