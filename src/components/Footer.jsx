import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer_icon">
          <FaInstagram className="footer_icon" />
          <FaTwitter className="footer_icon" />
          <FaGithub className="footer_icon" />
          <FaYoutube className="footer_icon" />
        </div>
        <div className="footer_text">
          <p>All rights reserved © techinfo YT</p>
        </div>
      </div>
    </>
  );
}
