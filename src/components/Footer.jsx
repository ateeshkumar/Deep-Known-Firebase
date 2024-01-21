import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import "./css/footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="upper-footer-container">
          <h1>Deep Known</h1>
          <ul className="list-f-container">
            <li className="f-list">
              <Link to="/" className="f-list-a">
                Home
              </Link>
            </li>
            <li className="f-list">
              <Link to="/internship" className="f-list-a">
                Internship
              </Link>
            </li>
            <li className="f-list">
              <Link to="/jobs" className="f-list-a">
                Jobs
              </Link>
            </li>
            <li className="f-list">
              <Link to="new-movies" className="f-list-a">
                New Movies
              </Link>
            </li>
            <li className="f-list">
              <Link to="/movies" className="f-list-a">
                Movies
              </Link>
            </li>
          </ul>
          <ul className="list-f-container">
            <li className="f-list">
              <Link to="" className="f-list-a">
                <FaTelegram
                  color="#099284"
                  fontSize={"30px"}
                  style={{ textAlign: "center" }}
                />{" "}
                Internship Telegram
              </Link>
            </li>
            <li className="f-list">
              <Link to="" className="f-list-a">
                <FaTelegram
                  color="#099284"
                  fontSize={"30px"}
                  style={{ textAlign: "center" }}
                />{" "}
                Jobs Telegram
              </Link>
            </li>
            <li className="f-list">
              <Link to="" className="f-list-a">
                <FaTelegram
                  color="#099284"
                  fontSize={"30px"}
                  style={{ textAlign: "center" }}
                />{" "}
                New Movies Telegram
              </Link>
            </li>
            <li className="f-list">
              <Link to="" className="f-list-a">
                <FaTelegram
                  color="#099284"
                  fontSize={"30px"}
                  style={{ textAlign: "center" }}
                />{" "}
                Movies Telegram
              </Link>
            </li>
          </ul>
          <ul className="list-f-container">
            <li className="f-list">
              <Link to="" className="f-list-a">
                <FaWhatsappSquare
                  color="green"
                  fontSize={"30px"}
                  style={{ textAlign: "center" }}
                />{" "}
                Internship Whatsapp
              </Link>
            </li>
            <li className="f-list">
              <Link to="" className="f-list-a">
                <FaWhatsappSquare
                  color="green"
                  fontSize={"30px"}
                  style={{ textAlign: "center" }}
                />{" "}
                Jobs Whatsapp
              </Link>
            </li>
            <li className="f-list">
              <Link to="" className="f-list-a">
                <FaWhatsappSquare
                  color="green"
                  fontSize={"30px"}
                  style={{ textAlign: "center" }}
                />{" "}
                New Movies Whatsapp
              </Link>
            </li>
            <li className="f-list">
              <Link to="" className="f-list-a">
                <FaWhatsappSquare
                  color="green"
                  fontSize={"30px"}
                  style={{ textAlign: "center" }}
                />{" "}
                Movies Whatsapp
              </Link>
            </li>
          </ul>
        </div>
        <div className="lower-footer-container">
          <p>deepknown.online&copy;2024</p>
          <ul
            className="list-f-container-bootom"
            style={{ flexDirection: "row" }}
          >
            <li className="f-list">
              <Link to="" className="f-list-a">
                <FaWhatsappSquare color="green" fontSize={"30px"} />
              </Link>
            </li>
            <li className="f-list">
              <Link to="" className="f-list-a">
                <FaDiscord color="blue" fontSize={"30px"} />
              </Link>
            </li>
            <li className="f-list">
              <Link to="" className="f-list-a">
                <FaInstagramSquare color="orange" fontSize={"30px"} />
              </Link>
            </li>
            <li className="f-list">
              <Link to="" className="f-list-a">
                <FaTelegram color="blue" fontSize={"30px"} />
              </Link>
            </li>
            <li className="f-list">
              <Link
                to="/privacy-policy"
                className="f-list-a"
                style={{ color: "blue" }}
              >
                Privacy Policy
              </Link>
            </li>
            <li className="f-list">
              <Link
                to="/term-condition"
                className="f-list-a"
                style={{ color: "blue" }}
              >
                Term & Condition
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
