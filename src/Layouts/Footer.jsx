import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-danger text-white">
        <div style={{ display: "inline" }}>
          &emsp;&emsp; &#169;Tours & Travels
        </div>
        <div style={{ float: "right" }}>
          &emsp;
          <i className="fa fa-envelope" aria-hidden="true">
            &emsp;&emsp;toursandtravels@gmail.com &emsp;
          </i>
          <br />
          &emsp;
          <i className="fa fa-phone" aria-hidden="true">
            &emsp;&emsp;+91 9874563210&emsp;
          </i>
        </div>
      </footer>
    </>
  );
};

export default Footer;
