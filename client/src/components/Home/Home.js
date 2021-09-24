import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      
      <h2>{t("welcome_msg")}</h2>
      <Link to="/base">
        <motion.button animate={{}}>{t("welcome_btn")}</motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
