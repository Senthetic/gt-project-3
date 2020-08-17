import React from "react";

const Footer = () => {
  const footerStyle = {
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
  backgroundColor: "#3C6E71",
  color: "white",
  textAlign: "center"
  };
  return (
    <footer className="container">
      <nav
        className="navbar fixed-bottom stickyFooter navbar-expand-lg"
        style={footerStyle}
      >
        <div>
          {" "}
          {/* <h1>
            Disclaimer: {" "}
          </h1> 
           <p>By accessing or using the Blackout Preventer App or any
            page of this app, you signify your assent to this disclaimer. The
            contents of this app, including without limitation, all data,
            information, text, graphics, links, and other materials are provided
            as a convenience to our app users and are meant to be used for
            informational purposes only. We do not take responsibility for
            decisions taken by the reader based solely on the information
            provided in this app</p> */}
        </div>
        <div className="navbar-brand">
          © 2020 Brian Cook, Jimmy Kazadi, Andrew Collier
        </div>
      </nav>
    </footer>
  );
};
export default Footer;
