import { GitHub, Google, LinkedIn } from "@mui/icons-material";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <h2 className="footer-head">you can connect me via</h2>
      <ul className="list">
        <li>
          <a
            href="https://github.com/PrashantChauhan001"
            className="link"
            target="blank"
          >
            <GitHub sx={{ color: "white" }} fontSize="large" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/prashant-chauhan-ReactJS-developer/"
            className="link"
            target="blank"
          >
            <LinkedIn sx={{ color: "white" }} fontSize="large" />
          </a>
        </li>
        <li>
          <a
            href="https://leetcode.com/Prashant__Chauhan/"
            className="link"
            target="blank"
          >
            {/* <Google sx={{ color: "white" }} fontSize="large" /> */}
            <img
              src="/assets/icons/leetcode.svg"
              alt="Leetcode"
              style={{ width: "34px" }}
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
