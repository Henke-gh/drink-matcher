import React from "react";
import "./Footer.css";


export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="footer">
        <p className="copyrightText">© {currentYear} Copyright. Göteborg</p>
      </footer>
    );
  }