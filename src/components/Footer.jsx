// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f0f0f0",
        textAlign: "center",
        padding: "20px",
        marginTop: "30px",
      }}
    >
      <p style={{ margin: "0", padding: "0", fontSize: "16px" }}>
        © 2023 Your Company Name. All rights reserved.
      </p>
      <p style={{ margin: "0", padding: "0", fontSize: "14px" }}>
        Follow us on:
        <a href="https://twitter.com" style={{ margin: "0 10px" }}>
          Twitter
        </a>
        <a href="https://facebook.com">Facebook</a>
        <a href="https://instagram.com" style={{ margin: "0 10px" }}>
          Instagram
        </a>
      </p>
    </footer>
  );
};

export default Footer;
