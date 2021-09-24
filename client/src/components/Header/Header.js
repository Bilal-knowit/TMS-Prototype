import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./header.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState({ value: "en", text: "Eng" });

  function changeLanguage(e) {
    if (e.target.value == "en") {
      setLang({ value: "nor", text: "Nor" });
    } else {
      setLang({ value: "en", text: "Eng" });
    }
    i18n.changeLanguage(e.target.value);
  }

  return (
    <header className="navbar">
      <Link to="/">
        <div className="logo">
          <svg
            className="logo-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          />
        </div>
      </Link>
      <motion.div
        className="title"
        initial={{ position: "relative", top: -250 }}
        animate={{ top: -10 }}
      >
        <div className="navlink">
          <Link to="/visualize">
            <span>{t("visualization")}</span>
          </Link>
          <Link to="/progress">
            <span>{t("progress")}</span>
          </Link>
          <button
            onClick={changeLanguage}
            className="localeButton"
            value={lang.value}
          >
            {lang.text}
          </button>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
