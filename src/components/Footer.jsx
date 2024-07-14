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
      <p style={{ margin: "0", padding: "0", fontSize: "12px" }}>
        © 2024 MICHELLE B. All rights reserved.
      </p>
      <p style={{ margin: "0", padding: "0", fontSize: "14px" }}>
        <a href="https://facebook.com">Facebook</a>
        <a href="https://instagram.com" style={{ margin: "0 10px" }}>
          Instagram
        </a>
      </p>
    </footer>
  );
};

export default Footer;
